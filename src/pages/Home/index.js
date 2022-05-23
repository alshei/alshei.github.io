import React from "react";
import { Canvas } from "@react-three/fiber";
import Content from "../../three/Scene";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div id="home" className="bg-light1 dark:bg-dark1 w-screen h-screen -mt-6">
      <div className="container px-8 mx-auto flex flex-row items-center justify-between h-full">
        <div className="container">
          <Title />
        </div>

        <div className="container h-full">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15.5] }}>
            <pointLight color="red" />
            <pointLight position={[10, 10, -10]} color="#718096" />
            <pointLight position={[-10, -10, 10]} color="#F2718C" />
            <Content />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
