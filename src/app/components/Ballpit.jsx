"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Ballpit({
  count = 120,
  colors = ["#38BDF8"],
  followCursor = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Light
    const light = new THREE.PointLight(colors[0], 150);
    light.position.set(0, 0, 5);
    scene.add(light);

    // Balls
    const geometry = new THREE.SphereGeometry(0.4, 24, 24);

    const spheres = [];
    const velocities = [];

    for (let i = 0; i < count; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: colors[0],
        metalness: 0.3,
        roughness: 0.6,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6
      );

      // velocity for movement
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );

      spheres.push(mesh);
      scene.add(mesh);
    }

    // Mouse
    const mouse = new THREE.Vector2(0, 0);

    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      spheres.forEach((s, i) => {
        const v = velocities[i];

        // movement update
        s.position.add(v);

        // soft float (natural feel)
        s.position.y += Math.sin(t + i) * 0.002;

        // boundary bounce
        if (s.position.x > 7 || s.position.x < -7) v.x *= -1;
        if (s.position.y > 7 || s.position.y < -7) v.y *= -1;
        if (s.position.z > 5 || s.position.z < -5) v.z *= -1;

        // cursor attraction
        if (followCursor) {
          s.position.x += mouse.x * 0.002;
          s.position.y += mouse.y * 0.002;
        }
      });

      // light follows cursor
      if (followCursor) {
        light.position.x = mouse.x * 8;
        light.position.y = mouse.y * 8;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize FIX
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [count, colors, followCursor]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}