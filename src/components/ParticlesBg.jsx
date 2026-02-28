import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

export default function ParticlesBg(){
  const init = async engine => {
    await loadFull(engine)
  }

  return (
    <Particles
      init={init}
      style={{
        position:"fixed",
        zIndex:0,
        top:0,
        left:0,
        width:"100%",
        height:"100%"
      }}
      options={{
        fullScreen:false,
        particles:{
          number:{ value:120 },
          color:{ value:"#00ffff" },
          opacity:{ value:0.3 },
          size:{ value:{ min:1, max:4 } },
          move:{
            enable:true,
            speed:0.6
          },
          links:{
            enable:true,
            distance:150,
            opacity:0.2
          }
        }
      }}
    />
  )
}