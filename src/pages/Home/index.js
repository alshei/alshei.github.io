import React from "react";
import { Canvas } from "@react-three/fiber";
import Content from "../../three/Scene";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div id="home" className="bg-light1 dark:bg-dark1 w-screen h-screen -mt-6">
      <div className="container px-8 mx-auto flex flex-col lg:flex-row md:flex-row items-center h-full">
        <div className="container bg-red-900 flex items-center justify-center mt-24 lg:mt-0 md:mt-0">
          <Title />
        </div>

        <div className="container h-full  bg-black flex items-center justify-center">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12] }}>
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
