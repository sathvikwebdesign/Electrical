'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollRevealText from "./ScrollReveal"

gsap.registerPlugin(ScrollTrigger)

const teamData = [
  {
    id: 1,
    name: "K Madharchod",
    role: "H.O.D EEE dept",
    email: "Sathvikreddyfootballer@gmail.com",
    tag: "HOD EEE",
    bio: "Hardware doesn't configure itself. The grid requires operators. We are a tightly synchronized network of developers, researchers, and system designers dictating the future of the association. This is the core protocol. Meet the nodes.",
    color: "bg-[#444]"
  },
  {
    id: 2,
    name: "Sarah Protocol",
    role: "Lead Systems Architect",
    email: "sarah.protocol@eea.nitap",
    tag: "SYS ADMIN",
    bio: "Algorithms dictate the flow, but hardware dictates the capacity. My job is to ensure the association's infrastructure can handle the theoretical limits pushed by our research nodes. Optimization is not a goal; it's a baseline.",
    color: "bg-[#88b2e3]" 
  },
  {
    id: 3,
    name: "Marcus Node",
    role: "Circuit Operations",
    email: "marcus.node@eea.nitap",
    tag: "HARDWARE",
    bio: "Theory is useless until a current runs through it. We spend our nights soldering the bridge between abstract math and physical reality. If it sparks, we fix it. If it doesn't spark, we push more voltage.",
    color: "bg-[#e38888]"
  }
]

export default function Faculty() {
  // We put the ref on the NAKED wrapper now
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!triggerRef.current) return

    const slides = gsap.utils.toArray('.person-slide', triggerRef.current)
    if (slides.length < 2) return 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center", 
        end: `+=${slides.length * 100}%`, 
        pin: true,
        scrub: 1,
        pinSpacing: true, // Forcing GSAP to push the footer down
      }
    })

    slides.forEach((slide, index) => {
      if (index === 0) return 

      tl.to(slides[index - 1], { 
          autoAlpha: 0, 
          y: -30, 
          duration: 1 
      })
      .fromTo(slide, 
          { autoAlpha: 0, y: 30 }, 
          { autoAlpha: 1, y: 0, duration: 1 }, 
          "<" 
      )
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    // Top level is completely standard block display
    <div className="pl-[2.6rem] pt-[15rem] pb-[10rem] relative z-2 bg-[#ffffff] block">

        <div className="max-w-[55vw] mb-[10rem]">
            <ScrollRevealText text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
            customClasses="leading-[2rem] gap-[0.3rem] text-[2rem]"/>
        </div>

        {/* THE NAKED WRAPPER: No flex, no grid, no positioning. Just a clean box for GSAP. */}
        <div ref={triggerRef}>
            
            <div className="team w-full">
                <div className="small_head text-[1.2rem] font-syne text-[#999] mb-[2rem]"> Our Team </div>
                
                {/* THE CSS GRID STACK: This replaces absolute positioning. */}
                <div className="data grid w-full"> 
                    
                    {teamData.map((person, index) => (
                        <div 
                        key={person.id} 
                        // col-start-1 row-start-1 perfectly overlaps them without breaking your flex widths!
                        className={`person-slide col-start-1 row-start-1 flex pr-[2.6rem] w-full ${index !== 0 ? 'invisible opacity-0' : ''}`}
                        >
                        
                        <div className={`photo w-[32.5rem] h-[37.5rem] ${person.color} shrink-0`}></div>
                        
                        <div className="left font-outfit font-normal text-[#222] max-w-[20vw] leading-[1.35rem] ml-[2.5rem]">
                            {person.bio}
                        </div>
                        
                        <div className="right self-end ml-auto text-left"> 
                            <div className="small_head text-[1.6rem] font-syne text-[#999]"> {person.name} </div>
                            <div className="small_head text-[1.6rem] font-syne text-[#999]"> {person.role} </div>
                            <div className="small_head text-[1.6rem] font-syne text-[#999]"> {person.email} </div>
                            <div className="small_head text-[1.6rem] font-syne text-[#999]"> {person.tag} </div>
                        </div>
                        
                        </div>
                    ))}

                </div>
            </div>

        </div>

    </div>
  )
}