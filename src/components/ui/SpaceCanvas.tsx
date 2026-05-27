import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const SpaceCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    // Narrower field of view for premium telephoto compression
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 90;

    // 2. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Create 3D Orbiting Particle Galaxy (Subtle sharp stars)
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPrimary = new THREE.Color('#FFFFFF'); // Crisp white stars
    const colorAccent = new THREE.Color('#93C5FD');  // Soft pale blue stars

    for (let i = 0; i < particleCount; i++) {
      // Distribute stars in a wide 3D space volume
      const x = (Math.random() - 0.5) * 280;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 160 - 40; // Push stars back behind text layers

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // 85% pure white stars, 15% soft blue stars for high-end color accuracy
      const mixRatio = Math.random() > 0.85 ? 0.3 : 0.0;
      const mixedColor = colorPrimary.clone().lerp(colorAccent, mixRatio);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Raw squares at size 0.32 render as ultra-sharp pin-point dots on Retina/4K screens
    const material = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // 4. Interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let baseRotationY = 0;
    let baseRotationX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalized coordinates (-0.5 to 0.5)
      targetX = (event.clientX / window.innerWidth) - 0.5;
      targetY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Very slow, professional background orbital drift
      baseRotationY += 0.0003;
      baseRotationX += 0.0001;

      // Smooth pointer tracking interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle reactive tilt (Apple-level details: no massive shifts)
      starField.rotation.y = baseRotationY + mouseX * 0.08;
      starField.rotation.x = baseRotationX + mouseY * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize handling
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden opacity-[0.45]"
    />
  );
};
