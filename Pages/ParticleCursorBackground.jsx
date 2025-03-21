import React, { useEffect } from "react";
import * as THREE from "three";

const StarfieldBackground = () => {
  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";

    // Create stars
    const starCount = 2000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200; // X
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 200; // Y
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200; // Z
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animate stars (slow movement)
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005; // Slow rotation for a drifting effect
      renderer.render(scene, camera);
    };

    animate();

    // Handle cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default StarfieldBackground;
