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
      className="fixed inset-0 z-[-10]" // corrected z-index for better layering
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: theme === "dark" ? "#9333ea" : "#7e22ce",
          },
          links: {
            color: theme === "dark" ? "#9333ea" : "#7e22ce",
            distance: 150,
            enable: true,
            opacity: 0.5, // Increased opacity for better visibility
            width: 2,     // Increased width for better visibility
          },
          move: {
            enable: true,
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, // Increased number of particles
          },
          opacity: {
            value: 0.4, // Increased opacity for better visibility
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 }, // Increased size range
          },
        },
        detectRetina: true,
      }}
    />
  );
}