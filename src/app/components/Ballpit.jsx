"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

// ── Physics ────────────────────────────────────────────────────────────────
class Physics {
  constructor(cfg) {
    this.cfg = cfg;
    this.pos = new Float32Array(3 * cfg.count).fill(0);
    this.vel = new Float32Array(3 * cfg.count).fill(0);
    this.sizes = new Float32Array(cfg.count);
    this.center = new THREE.Vector3();
    this._initPositions();
    this._initSizes();
  }

  _initPositions() {
    const { cfg, pos } = this;
    for (let i = 1; i < cfg.count; i++) {
      const b = 3 * i;
      pos[b]     = (Math.random() - 0.5) * 2 * cfg.maxX;
      pos[b + 1] = (Math.random() - 0.5) * 2 * cfg.maxY;
      pos[b + 2] = (Math.random() - 0.5) * 2 * cfg.maxZ;
    }
  }

  _initSizes() {
    const { cfg, sizes } = this;
    sizes[0] = cfg.size0;
    for (let i = 1; i < cfg.count; i++) {
      sizes[i] = cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize);
    }
  }

  update(delta) {
    const { cfg, pos, vel, sizes, center } = this;
    const start = cfg.controlSphere0 ? 1 : 0;

    if (cfg.controlSphere0) {
      const p0 = new THREE.Vector3().fromArray(pos, 0).lerp(center, 0.1);
      p0.toArray(pos, 0);
      vel[0] = vel[1] = vel[2] = 0;
    }

    for (let i = start; i < cfg.count; i++) {
      const b = 3 * i;
      vel[b + 1] -= delta * cfg.gravity * sizes[i];
      vel[b]     *= cfg.friction;
      vel[b + 1] *= cfg.friction;
      vel[b + 2] *= cfg.friction;
      const spd = Math.sqrt(vel[b]**2 + vel[b+1]**2 + vel[b+2]**2);
      if (spd > cfg.maxVelocity) {
        const sc = cfg.maxVelocity / spd;
        vel[b] *= sc; vel[b+1] *= sc; vel[b+2] *= sc;
      }
      pos[b]     += vel[b];
      pos[b + 1] += vel[b + 1];
      pos[b + 2] += vel[b + 2];
    }

    const tmp = new THREE.Vector3();
    for (let i = start; i < cfg.count; i++) {
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
          vel[b]  -= tmp.x * Math.max(Math.abs(vel[b]), 0.5);
          vel[b+1] -= tmp.y * Math.max(Math.abs(vel[b+1]), 0.5);
          vel[bj]  += tmp.x * Math.max(Math.abs(vel[bj]), 0.5);
          vel[bj+1] += tmp.y * Math.max(Math.abs(vel[bj+1]), 0.5);
          pi.toArray(pos, b);
          pj.toArray(pos, bj);
        }
      }

      if (cfg.controlSphere0) {
        const p0 = new THREE.Vector3().fromArray(pos, 0);
        tmp.copy(p0).sub(pi);
        const d0 = tmp.length();
        const minD0 = ri + sizes[0];
        if (d0 < minD0 && d0 > 0.0001) {
          const diff = minD0 - d0;
          tmp.normalize().multiplyScalar(diff);
          pi.sub(tmp);
          vel[b]   -= tmp.x * Math.max(Math.abs(vel[b]), 2);
          vel[b+1] -= tmp.y * Math.max(Math.abs(vel[b+1]), 2);
          pi.toArray(pos, b);
        }
      }

      // Walls
      if (Math.abs(pi.x) + ri > cfg.maxX) { pi.x = Math.sign(pi.x) * (cfg.maxX - ri); vel[b] *= -cfg.wallBounce; }
      if (pi.y - ri < -cfg.maxY)           { pi.y = -cfg.maxY + ri;                      vel[b+1] *= -cfg.wallBounce; }
      if (pi.y + ri > cfg.maxY)            { pi.y = cfg.maxY - ri;                        vel[b+1] *= -cfg.wallBounce; }
      const maxBound = Math.max(cfg.maxZ, cfg.maxSize);
      if (Math.abs(pi.z) + ri > maxBound)  { pi.z = Math.sign(pi.z) * (cfg.maxZ - ri);   vel[b+2] *= -cfg.wallBounce; }

      pi.toArray(pos, b);
    }
  }
}

// ── createBallpit ──────────────────────────────────────────────────────────
function createBallpit(canvas, opts = {}) {
  const cfg = {
    count: 100,
    colors: ["#38BDF8", "#7dd3fc", "#bae6fd", "#0ea5e9"],
    minSize: 0.3,
    maxSize: 0.9,
    size0: 0.9,
    gravity: 0.4,
    friction: 0.992,
    wallBounce: 0.85,
    maxVelocity: 0.18,
    maxX: 8,
    maxY: 5,
    maxZ: 2,
    controlSphere0: false,
    followCursor: true,
    ...opts,
  };

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  // Scene + Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 20);

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambient);
  const pointLight = new THREE.PointLight(0x38bdf8, 400, 50);
  pointLight.position.set(0, 0, 10);
  scene.add(pointLight);
  const fillLight = new THREE.PointLight(0xffffff, 200, 50);
  fillLight.position.set(5, 5, 8);
  scene.add(fillLight);

  // Color palette
  const palette = (Array.isArray(cfg.colors) ? cfg.colors : ["#38BDF8"]).map(c => new THREE.Color(c));

  // Instanced Mesh
  const geo = new THREE.SphereGeometry(1, 32, 32);
  const mat = new THREE.MeshPhysicalMaterial({
    color: palette[0],
    metalness: 0.2,
    roughness: 0.15,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1,
  });

  const mesh = new THREE.InstancedMesh(geo, mat, cfg.count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  // Per-instance colors
  const colorArr = new Float32Array(cfg.count * 3);
  for (let i = 0; i < cfg.count; i++) {
    const c = palette[i % palette.length];
    colorArr[i * 3]     = c.r;
    colorArr[i * 3 + 1] = c.g;
    colorArr[i * 3 + 2] = c.b;
  }
  mesh.instanceColor = new THREE.InstancedBufferAttribute(colorArr, 3);
  scene.add(mesh);

  // Physics
  const physics = new Physics(cfg);
  const dummy = new THREE.Object3D();

  // Resize
  function resize() {
    const w = canvas.parentElement?.offsetWidth || window.innerWidth;
    const h = canvas.parentElement?.offsetHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const fovRad = (camera.fov * Math.PI) / 180;
    const wHeight = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const wWidth = wHeight * camera.aspect;
    cfg.maxX = wWidth / 2 * 0.95;
    cfg.maxY = wHeight / 2 * 0.95;
  }
  resize();

  const ro = new ResizeObserver(resize);
  ro.observe(canvas.parentElement || document.body);
  window.addEventListener("resize", resize);

  // Mouse / Touch
  const mouse = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const intersection = new THREE.Vector3();

  function updatePointer(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera({ x: nx, y: ny }, camera);
    camera.getWorldDirection(plane.normal);
    raycaster.ray.intersectPlane(plane, intersection);
    mouse.copy(intersection);
    physics.center.copy(intersection);
    cfg.controlSphere0 = true;
  }

  window.addEventListener("pointermove", (e) => { if (cfg.followCursor) updatePointer(e.clientX, e.clientY); });
  window.addEventListener("pointerleave", () => { cfg.controlSphere0 = false; });
  canvas.addEventListener("touchmove", (e) => {
    if (cfg.followCursor) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  canvas.addEventListener("touchend", () => { cfg.controlSphere0 = false; }, { passive: true });

  // Animate
  let rafId;
  let lastTime = performance.now();
  let paused = false;

  function animate() {
    rafId = requestAnimationFrame(animate);
    if (paused) return;

    const now = performance.now();
    const delta = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    physics.update(delta);

    for (let i = 0; i < cfg.count; i++) {
      dummy.position.fromArray(physics.pos, 3 * i);
      dummy.scale.setScalar(
        i === 0 && !cfg.followCursor ? 0 : physics.sizes[i]
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    pointLight.position.copy(mouse);
    renderer.render(scene, camera);
  }

  animate();

  return {
    dispose() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    },
  };
}

// ── React Component ────────────────────────────────────────────────────────
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