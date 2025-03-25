
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const TanzaniaMap3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a simplified Tanzania map shape (simplified polygon)
    const shape = new THREE.Shape();
    
    // Starting point (approximate outline of Tanzania)
    shape.moveTo(0, 0);
    shape.lineTo(5, 0);
    shape.lineTo(6, 2);
    shape.lineTo(7, 1);
    shape.lineTo(8, 3);
    shape.lineTo(7, 5);
    shape.lineTo(8, 7);
    shape.lineTo(6, 8);
    shape.lineTo(4, 7);
    shape.lineTo(1, 8);
    shape.lineTo(0, 6);
    shape.lineTo(0, 0);
    
    // Create extrusion settings
    const extrudeSettings = {
      steps: 2,
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.2,
      bevelOffset: 0,
      bevelSegments: 3
    };
    
    // Create geometry and material
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    
    // Add texture or gradient
    const material = new THREE.MeshPhongMaterial({
      color: 0xF97316,
      specular: 0xffffff,
      shininess: 30,
      flatShading: false,
    });
    
    // Create mesh
    const tanzaniaMap = new THREE.Mesh(geometry, material);
    
    // Center the map
    geometry.center();
    
    // Add to scene
    scene.add(tanzaniaMap);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Position camera
    camera.position.z = 10;
    
    // Add dot for Dar es Salaam
    const dotGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const darDot = new THREE.Mesh(dotGeometry, dotMaterial);
    darDot.position.set(5, 6, 0.7);
    scene.add(darDot);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      tanzaniaMap.rotation.y += 0.005;
      tanzaniaMap.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-64 opacity-70" />;
};

export default TanzaniaMap3D;
