import { useCallback } from "react";
import { useTheme } from "@/components/theme-provider";
import { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="fixed inset-0 -z-1"
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: theme === "dark" ? "#9333ea" : "#7e22ce",
          },
          links: {
            color: theme === "dark" ? "#9333ea" : "#7e22ce",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}