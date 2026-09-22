import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000"
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fullScreen: {
          enable: false
        },
        detectRetina: false,
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 30,
            enable: true,
            opacity: 0.4
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200
              }
            },
            enable: true,
            path: {},
            outModes: {
              default: "bounce",
              bottom: "bounce",
              left: "bounce",
              right: "bounce",
              top: "bounce"
            },
            speed: 1,
            spin: {}
          },
          number: {
            density: {
              area: 2000
            },
            value: 200
          },
          opacity: {
            value: {
              min: 0.05,
              max: 0.4
            },
            animation: {
              enable: true,
              minimumValue: 0.05
            }
          },
          size: {
            random: {
              enable: true
            },
            value: 1,
            animation: {
              speed: 40,
              minimumValue: 0.1
            }
          }
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: {
                value: "rgba(255,255,255,0.2)"
              },
              width: 0.5,
              opacity: 0.2
            }
          },
          enable: true,
          inline: {
            arrangement: "equidistant"
          },
          move: {
            radius: 10,
            type: "path"
          },
          scale: 0.9,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg"
        }
      }}
    />
  );
}

export default Particle;
