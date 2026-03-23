import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelixModel = ({ prefersReducedMotion }) => {
    const groupRef = useRef();

    // Load the final reference texture
    const texture = useTexture('/dna-final-ref.jpg');

    // DNA Shape Parameters
    const count = 30; // Number of base pairs
    const radius = 2.5;
    const height = 15;
    const turns = 2; // Matches the gentle twist of the reference

    // Material Setup: "Frosted Blue Ice"
    // Using the image as a map ensures exact color matching
    const material = useMemo(() => new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.4,       // Frosted look
        metalness: 0.2,       // Slight reflection
        emissive: '#004488',  // Deep blue inner glow
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
    }), [texture]);

    // Generate Helix Geometry
    const helixData = useMemo(() => {
        const positions = [];
        for (let i = 0; i <= count; i++) {
            const t = i / count;
            const angle = t * Math.PI * 2 * turns;
            const y = (t - 0.5) * height;

            // Strand positions
            const x1 = Math.cos(angle) * radius;
            const z1 = Math.sin(angle) * radius;
            const x2 = Math.cos(angle + Math.PI) * radius;
            const z2 = Math.sin(angle + Math.PI) * radius;

            positions.push({ x1, y, z1, x2, z2, angle });
        }
        return positions;
    }, []);

    // Geometries
    // Using Sphere and Cylinder to mimic the 'beaded' organic look of the reference
    const sphereGeo = useMemo(() => new THREE.SphereGeometry(0.4, 24, 24), []);
    const cylinderGeo = useMemo(() => new THREE.CylinderGeometry(0.12, 0.12, 1, 12), []);

    useFrame((state) => {
        if (!prefersReducedMotion && groupRef.current) {
            // "2.5D Illusion" - Rotate gently on LOCAL axis only
            // The object itself stays fixed in the diagonal pose, but spins internally
            groupRef.current.rotation.y -= 0.003; // Vert slow rotation (~20s loop)

            // Subtle "breathing" floating motion
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
        }
    });

    return (
        // Tilt the group to match the reference image diagonal (~40 degrees)
        // rotation Z tilts it, rotation X/Y angles it towards camera
        <group rotation={[0, 0, Math.PI / 5]}>
            <group ref={groupRef}>
                {helixData.map((pos, i) => (
                    <group key={i}>
                        {/* Strands */}
                        <mesh position={[pos.x1, pos.y, pos.z1]} geometry={sphereGeo} material={material} />
                        <mesh position={[pos.x2, pos.y, pos.z2]} geometry={sphereGeo} material={material} />

                        {/* Rungs */}
                        <mesh
                            position={[(pos.x1 + pos.x2) / 2, pos.y, (pos.z1 + pos.z2) / 2]}
                            rotation={[0, -pos.angle, Math.PI / 2]}
                            geometry={cylinderGeo}
                            material={material}
                            scale={[1, radius * 2, 1]}
                        />
                    </group>
                ))}
            </group>
        </group>
    );
};

const DNAHelix = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: 'white' // Clean white background
        }}>
            <Canvas
                // Camera positioned to frame the diagonal helix perfectly
                camera={{ position: [0, 0, 16], fov: 40 }}
                gl={{
                    alpha: true,
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.1
                }}
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 15]} intensity={1.5} color="#eef6ff" />
                <spotLight position={[-10, 0, 10]} intensity={1} color="#0066cc" />

                <React.Suspense fallback={null}>
                    <DNAHelixModel prefersReducedMotion={prefersReducedMotion} />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

export default DNAHelix;
