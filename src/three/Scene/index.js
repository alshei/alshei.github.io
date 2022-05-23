import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sphere = ({ time, ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial roughness={0} emissive="#171923" />
    </mesh>
  );
};

const Content = () => {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.015)
  );
  return (
    <group ref={ref}>
      <Sphere position={[2, 0, 0]} />
      <Sphere position={[0, 0, 2]} />
      <Sphere position={[2, 0, 2]} />
      <Sphere position={[2, 0, -2]} />

      <Sphere position={[2, 2, 0]} />
      <Sphere position={[0, 2, 2]} />
      <Sphere position={[2, 2, 2]} />
      <Sphere position={[2, 2, -2]} />

      <Sphere position={[2, -2, 0]} />
      <Sphere position={[0, -2, 2]} />
      <Sphere position={[2, -2, 2]} />
      <Sphere position={[2, -2, -2]} />

      <Sphere position={[0, 2, 0]} />
      <Sphere position={[0, 0, 0]} />
      <Sphere position={[0, -2, 0]} />

      <Sphere position={[-2, 0, 2]} />
      <Sphere position={[-2, 0, -2]} />
      <Sphere position={[-2, 0, 0]} />
      <Sphere position={[0, 0, -2]} />

      <Sphere position={[-2, 2, 2]} />
      <Sphere position={[-2, 2, -2]} />
      <Sphere position={[-2, 2, 0]} />
      <Sphere position={[0, 2, -2]} />

      <Sphere position={[-2, -2, 2]} />
      <Sphere position={[-2, -2, -2]} />
      <Sphere position={[-2, -2, 0]} />
      <Sphere position={[0, -2, -2]} />
    </group>
  );
};

export default Content;
