import { NextPage } from 'next';
import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleComponent: NextPage= () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true ,zIndex: 0},
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "grab",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 85.26326046708033,
              line_linked: {
                opacity: 0.4442177654201152
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
            },
            repulse: {
              distance: 64.96248416539453,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 20,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 250,
          },
          opacity: {
            value: 0.1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0.3,
              sync: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleComponent