import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float u_time;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec2 gridUV = vUv * 40.0;
    vec2 id = floor(gridUV);
    vec2 frac = fract(gridUV);

    float lineWidth = 0.02;
    float line = step(frac.x, lineWidth) + step(1.0 - frac.x, lineWidth) +
                 step(frac.y, lineWidth) + step(1.0 - frac.y, lineWidth);

    line = clamp(line, 0.0, 1.0);

    float randomness = hash(id);
    float blink = step(0.98, sin(u_time * 2.0 + randomness * 10.0));

    vec3 bgColor = vec3(0.09); // ~ Tailwind's bg-neutral-900
    vec3 lineColor = vec3(0.15); // subtle grid lines
    vec3 blinkColor = vec3(1.0, 0.4, 0.0); // emissive orange

    vec3 color = bgColor;
    color = mix(color, lineColor, line);
    color = mix(color, blinkColor, blink * (1.0 - line));

    gl_FragColor = vec4(color, 1.0);
  }
`;

const AnimatedShader = ({ speed = 1 }: { speed?: number }) => {
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useFrame((state) => {
        if (materialRef.current) {
            // Multiply elapsedTime by speed to control animation speed
            materialRef.current.uniforms.u_time.value = state.clock.elapsedTime * speed;
        }
    });

    return (
        <mesh scale={[4, 4, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    u_time: { value: 0 },
                }}
            />
        </mesh>
    );
};

const Background = ({ speed = 1 }: { speed?: number }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 2] }} style={{ background: '#171717' }}>
                <AnimatedShader speed={speed} />
            </Canvas>
        </div>
    );
};

export default Background;
