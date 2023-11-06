import  { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particleConfig } from "./Particl.config";

const ParticlesComponent = ({ id }) => {
  const options = useMemo(() => {
    return particleConfig;
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
