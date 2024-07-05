import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,  
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


const ParticlesBG = ({className}:{className:string}) => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {

    initParticlesEngine(async (engine) => {
    
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => setInit(false)
   
  }, []);

 
 
  const options: ISourceOptions = React.useMemo(
    () => ({
      style:{
        height:"100%",
        width:"100%",
        display:"block",
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex:"-1"                    
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#034aa6",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  
  if(init){
    return (
      <Particles
        id="tsparticles"        
        options={options}        
        className={className}                    
      />
    )
  }else{
    return (
      <></>
    )
  }
}

export default ParticlesBG