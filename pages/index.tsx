import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
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
    <>
      <Navbar/>
      <div className="mt-16 z-50">
        <h1 className="text-white ml-9 font-semibold text-4xl">I'm</h1>
        <br/>
        <h1 className="text-white ml-9 font-semibold leading-10 -mt-4 text-4xl">Adetunji <br/>Adeyinka</h1>
        <hr className="light-blue w-[150px] h-1 ml-[35px] border-transparent mt-2"/>
        <div className="w-64 h-auto mx-auto mt-8 items-center justify-center">
          <p className="text-white">I’m a fullstack web developer who provides quality services of industry satandard Dire was here.</p>
          <img src="/icons/learn-more.svg" alt="" className="w-auto h-5 mt-2"/>
          <img src="/images/me.jpeg" className="mt-5 rounded-full"/>
        </div>
        <div className="flex content-evenly flex-wrap mt-5">
          <div className="mx-auto">
            <img src="/icons/facebook.svg" alt="" className="w-8 h-8 mx-auto inline"/>
            <img src="/icons/instagram.svg" alt="" className="w-8 h-8 inline mx-3"/>
            <img src="/icons/twitter.svg" alt="" className="w-8 h-8 mx-auto inline"/>
          </div>
        </div>
      </div>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: true, zIndex: 0},
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
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 500,
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
    <div className="text-center bg-white h-10 mt-8 dark-blue">
      <p className="mx-auto mt-8 items-center justify-center text-white text-[13px]"> Copyright © 2022 | Adetunji Adeyinka </p>
    </div>
    </>
  )
};
export default Home
