"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

class Physics {
  constructor(cfg) {
    this.cfg = cfg;
    this.pos = new Float32Array(3 * cfg.count).fill(0);
    this.vel = new Float32Array(3 * cfg.count).fill(0);
    this.sizes = new Float32Array(cfg.count);
    this.center = new THREE.Vector3();
    this.cursorActive = false;
    this._initPositions();
    this._initSizes();
  }

  _initPositions() {
    const { cfg, pos } = this;
    for (let i = 0; i < cfg.count; i++) {
      const b = 3 * i;
      pos[b]     = (Math.random() - 0.5) * 2 * cfg.maxX;
      pos[b + 1] = (Math.random() - 0.5) * 2 * cfg.maxY;
      pos[b + 2] = (Math.random() - 0.5) * 2 * cfg.maxZ;
    }
  }

  _initSizes() {
    const { cfg, sizes } = this;
    for (let i = 0; i < cfg.count; i++) {
      sizes[i] = cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize);
    }
  }

  update(delta) {
    const { cfg, pos, vel, sizes, center, cursorActive } = this;
    const tmp = new THREE.Vector3();

    // Step 1 — gravity + friction + cursor force
    for (let i = 0; i < cfg.count; i++) {
      const b = 3 * i;

      // gravity
      vel[b + 1] -= delta * cfg.gravity * sizes[i];

      // cursor interaction
      if (cursorActive && cfg.followCursor) {
        const px = pos[b], py = pos[b+1], pz = pos[b+2];
        const dx = center.x - px;
        const dy = center.y - py;
        const dist = Math.sqrt(dx*dx + dy*dy + 0.001);

        const attractR = cfg.attractRadius ?? 6;   // attract from far
        const repulseR = cfg.repulseRadius ?? 1.8; // push away when very close

        if (dist < attractR) {
          if (dist < repulseR) {
            // Too close — push away
            const force = ((repulseR - dist) / repulseR) * cfg.repulseStrength;
            vel[b]   -= (dx / dist) * force * delta * 60;
            vel[b+1] -= (dy / dist) * force * delta * 60;
          } else {
            // In range — pull toward cursor + upward kick
            const t = 1 - dist / attractR;          // 0..1, stronger near cursor
            const force = t * t * cfg.attractStrength;
            vel[b]   += (dx / dist) * force * delta * 60;
            vel[b+1] += (dy / dist) * force * delta * 60;
            // extra upward boost so balls rise toward cursor
            vel[b+1] += t * cfg.upwardKick * delta * 60;
          }
        }
      }

      // friction
      vel[b]     *= cfg.friction;
      vel[b + 1] *= cfg.friction;
      vel[b + 2] *= cfg.friction;

      // clamp speed
      const spd = Math.sqrt(vel[b]**2 + vel[b+1]**2 + vel[b+2]**2);
      if (spd > cfg.maxVelocity) {
        const sc = cfg.maxVelocity / spd;
        vel[b] *= sc; vel[b+1] *= sc; vel[b+2] *= sc;
      }

      pos[b]     += vel[b];
      pos[b + 1] += vel[b + 1];
      pos[b + 2] += vel[b + 2];
    }

    // Step 2 — collision resolution
    for (let i = 0; i < cfg.count; i++) {
      const b = 3 * i;
      const pi = new THREE.Vector3().fromArray(pos, b);
      const ri = sizes[i];

      for (let j = i + 1; j < cfg.count; j++) {
        const bj = 3 * j;
        const pj = new THREE.Vector3().fromArray(pos, bj);
        const rj = sizes[j];
        tmp.copy(pj).sub(pi);
        const dist = tmp.length();
        const minD = ri + rj;
        if (dist < minD && dist > 0.0001) {
          const overlap = (minD - dist) * 0.5;
          tmp.normalize().multiplyScalar(overlap);
          pi.sub(tmp); pj.add(tmp);
          vel[b]    -= tmp.x * Math.max(Math.abs(vel[b]),   0.5);
          vel[b+1]  -= tmp.y * Math.max(Math.abs(vel[b+1]), 0.5);
          vel[bj]   += tmp.x * Math.max(Math.abs(vel[bj]),  0.5);
          vel[bj+1] += tmp.y * Math.max(Math.abs(vel[bj+1]),0.5);
          pi.toArray(pos, b);
          pj.toArray(pos, bj);
        }
      }

      // Walls
      if (Math.abs(pi.x) + ri > cfg.maxX) { pi.x = Math.sign(pi.x) * (cfg.maxX - ri); vel[b]   *= -cfg.wallBounce; }
      if (pi.y - ri < -cfg.maxY)           { pi.y = -cfg.maxY + ri;                     vel[b+1] *= -cfg.wallBounce; }
      if (pi.y + ri > cfg.maxY)            { pi.y =  cfg.maxY - ri;                     vel[b+1] *= -cfg.wallBounce; }
      const maxBound = Math.max(cfg.maxZ, cfg.maxSize);
      if (Math.abs(pi.z) + ri > maxBound)  { pi.z = Math.sign(pi.z) * (cfg.maxZ - ri); vel[b+2] *= -cfg.wallBounce; }

      pi.toArray(pos, b);
    }
  }
}

function createBallpit(canvas, opts = {}) {
  const cfg = {
    count: 120,
    colors: ["#ffffff", "#e0f7ff", "#22d3ee", "#06b6d4", "#cffafe"],
    minSize: 0.5,
    maxSize: 1.2,
    gravity: 0.38,
    friction: 0.991,
    wallBounce: 0.82,
    maxVelocity: 0.22,
    maxX: 8,
    maxY: 5,
    maxZ: 2,
    followCursor: true,
    attractRadius: 6.5,   // how far cursor pulls balls
    attractStrength: 0.055, // pull strength
    repulseRadius: 1.6,   // how close before pushing away
    repulseStrength: 0.12, // push strength
    upwardKick: 0.04,     // extra upward boost when attracted
    ...opts,
  };

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 20);

  scene.add(new THREE.AmbientLight(0xffffff, 2));
  const pLight1 = new THREE.PointLight(0x22d3ee, 500, 60);
  pLight1.position.set(0, 0, 10);
  scene.add(pLight1);
  const pLight2 = new THREE.PointLight(0xffffff, 300, 60);
  pLight2.position.set(6, 6, 8);
  scene.add(pLight2);
  const pLight3 = new THREE.PointLight(0x06b6d4, 200, 40);
  pLight3.position.set(-6, -4, 8);
  scene.add(pLight3);
  const cursorLight = new THREE.PointLight(0xffffff, 180, 20);
  scene.add(cursorLight);

  const palette = cfg.colors.map(c => new THREE.Color(c));
  const geo = new THREE.SphereGeometry(1, 48, 48);
  const mat = new THREE.MeshPhysicalMaterial({
    metalness: 0.1,
    roughness: 0.08,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1.2,
    transparent: true,
    opacity: 0.92,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, cfg.count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const colorArr = new Float32Array(cfg.count * 3);
  for (let i = 0; i < cfg.count; i++) {
    const c = palette[i % palette.length];
    colorArr[i * 3]     = c.r;
    colorArr[i * 3 + 1] = c.g;
    colorArr[i * 3 + 2] = c.b;
  }
  mesh.instanceColor = new THREE.InstancedBufferAttribute(colorArr, 3);
  scene.add(mesh);

  const physics = new Physics(cfg);
  const dummy = new THREE.Object3D();

  function resize() {
    const parent = canvas.parentElement;
    const w = (parent?.offsetWidth) || window.innerWidth;
    const h = (parent?.offsetHeight) || window.innerHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const fovRad = (camera.fov * Math.PI) / 180;
    const wH = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const wW = wH * camera.aspect;
    cfg.maxX = wW / 2 * 0.93;
    cfg.maxY = wH / 2 * 0.93;
    // reinit positions with new bounds
    physics.cfg.maxX = cfg.maxX;
    physics.cfg.maxY = cfg.maxY;
  }
  resize();
  setTimeout(resize, 100);

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement || document.body);
  window.addEventListener("resize", resize);

  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const intersection = new THREE.Vector3();

  function updatePointer(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera({ x: nx, y: ny }, camera);
    camera.getWorldDirection(plane.normal);
    if (raycaster.ray.intersectPlane(plane, intersection)) {
      physics.center.copy(intersection);
      cursorLight.position.copy(intersection);
      pLight1.position.set(intersection.x, intersection.y, 10);
      physics.cursorActive = true;
    }
  }

  const onMove = (e) => { if (cfg.followCursor) updatePointer(e.clientX, e.clientY); };
  const onLeave = () => { physics.cursorActive = false; };
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerleave", onLeave);
  canvas.addEventListener("touchmove", (e) => {
    if (cfg.followCursor) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  canvas.addEventListener("touchend", onLeave, { passive: true });

  let rafId;
  let lastTime = performance.now();

  function animate() {
    rafId = requestAnimationFrame(animate);
    const now = performance.now();
    const delta = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    physics.update(delta);

    for (let i = 0; i < cfg.count; i++) {
      dummy.position.fromArray(physics.pos, 3 * i);
      dummy.scale.setScalar(physics.sizes[i]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    renderer.render(scene, camera);
  }

  animate();

  return {
    dispose() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
  };
}

export default function Ballpit({ className = "", followCursor = true, ...props }) {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    instanceRef.current = createBallpit(canvas, { followCursor, ...props });
    return () => instanceRef.current?.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", touchAction: "auto" }}
    />
  );
}