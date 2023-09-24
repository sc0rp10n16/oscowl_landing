import './index.css'
import logo from './logo.png'
import React from 'react'
import Typewriter from 'typewriter-effect';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function App() {
  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div style={{
      backgroundColor: 'black',
    }}>
      <Particles options={options} init={particlesInit} />
      <div className="min-h-screen flex flex-col items-center justify-center lg:mx-48 text-black bg-dark">
        
        
        <h1 className='text-2xl font-extrabold'>
          <img src={logo} className="h-48 w-100" alt="logo" />
        </h1>
        <span className='text-xl text-white font-extrabold'>
          <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                'Sorry for inconvience, site is under maintenance',
                
              ]
            }}
          />
        </span>

      </div>
    </div>
  )
}