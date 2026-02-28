
import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

export default function ParticlesBg(){
  const init=async engine=>{
    await loadFull(engine)
  }

  return(
    <Particles
      init={init}
      options={{
        background:{color:"transparent"},
        particles:{
          number:{value:60},
          size:{value:2},
          move:{enable:true,speed:1},
          opacity:{value:0.5}
        }
      }}
    />
  )
}
