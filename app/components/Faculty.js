'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollRevealText from "./ScrollReveal"

gsap.registerPlugin(ScrollTrigger)

const teamData = [
  {
    id: 1,
    name: "Devara",
    role: "Bhadrinath",
    email: "Sathvikreddyfootballer@gmail.com",
    tag: "HOD EEE",
    bio: "Hardware doesn't configure itself. The grid requires operators. We are a tightly synchronized network of developers, researchers, and system designers dictating the future of the association. This is the core protocol. Meet the nodes.",
    color: "#444" 
  },
  {
    id: 2,
    name: "Sarah Protocol",
    role: "Lead Systems Architect",
    email: "sarah.protocol@eea.nitap",
    tag: "SYS ADMIN",
    bio: "Algorithms dictate the flow, but hardware dictates the capacity. My job is to ensure the association's infrastructure can handle the theoretical limits pushed by our research nodes. Optimization is not a goal; it's a baseline.",
    color: "#88b2e3" 
  },
  {
    id: 3,
    name: "Marcus Node",
    role: "Circuit Operations",
    email: "marcus.node@eea.nitap",
    tag: "HARDWARE",
    bio: "Theory is useless until a current runs through it. We spend our nights soldering the bridge between abstract math and physical reality. If it sparks, we fix it. If it doesn't spark, we push more voltage.",
    color: "#e38888"
  }
]

export default function Faculty() {
  const triggerRef = useRef(null)

  useEffect(() => {
    if (!triggerRef.current) return

    const slides = gsap.utils.toArray('.person-slide', triggerRef.current)
    if (slides.length < 2) return 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center", 
        end: `+=${slides.length * 200}%`, // Bumped to 200% to give room for the curtain math
        pin: true,
        scrub: 1,
        pinSpacing: true, 
      }
    })

    slides.forEach((slide, index) => {
      if (index === 0) return 

      // 1. THE HOLD: Reading time.
      tl.to({}, { duration: 1 })

      // 2. DROP THE CURTAIN 
      // Changed duration from 0.5 to 1. Added power3.out for that smooth deceleration.
      tl.to('.master-curtain', { 
          scaleY: 1, 
          duration: 1, 
          ease: "power3.out" 
      })

      // 3. THE HEIST (Instantly swap them while the curtain is down)
      .set('.master-curtain', { transformOrigin: "bottom" })
      .set(slides[index - 1], { autoAlpha: 0 })
      .set(slide, { autoAlpha: 1 })

      // 4. LIFT THE CURTAIN
      // Changed duration to 1. Added power3.out so it gracefully slows down as it reveals the image.
      .to('.master-curtain', { 
          scaleY: 0, 
          duration: 1,
          ease: "power3.out"
      })

      // 5. RESET
      .set('.master-curtain', { transformOrigin: "top" })
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="pl-[2.6rem] pt-[15rem] pb-[10rem] relative z-2 bg-[#ffffff] block">

        <div className="max-w-[55vw] mb-[10rem]">
            <ScrollRevealText text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
            customClasses="leading-[2rem] gap-[0.3rem] text-[2rem]"/>
        </div>

        <div ref={triggerRef}>
            
            <div className="team w-full">
                <div className="small_head text-[1.2rem] font-syne text-[#999] mb-[2rem]"> Our Team </div>
                
                {/* Made this relative so the absolute curtain stays trapped inside it */}
                <div className="data grid w-full relative"> 
                    
                    {/* THE MAGIC TRICK: A blank white sheet. 
                        scaleY(0) means it starts completely flat/invisible.
                        origin-top means when it grows, it pushes downward.
                    */}
                    <div 
                        className="master-curtain absolute top-0 left-0 w-full h-full bg-[#ffffff] z-10" 
                        style={{ transformOrigin: "top", transform: "scaleY(0)" }}
                    ></div>

                    {teamData.map((person, index) => (
                        <div 
                        key={person.id} 
                        className={`person-slide col-start-1 row-start-1 flex pr-[2.6rem] w-full ${index !== 0 ? 'invisible opacity-0' : ''}`}
                        >
                        
                        <div className="photo-container w-[32.5rem] h-[37.5rem]">
                            <div className="photo w-[32.5rem] h-[37.5rem] shrink-0" style={{ backgroundColor: person.color }}></div>
                        </div>
                        
                        <div className="left font-outfit font-normal text-[#222] w-[20vw] leading-[1.35rem] ml-[2.5rem]">
                            {person.bio}
                        </div>
                        
                        <div className="right self-end ml-auto mr-[4rem] text-left w-[15rem] flex flex-col gap-2"> 
                            <div className="small_head text-[1.6rem] leading-none font-syne text-[#000]"> {person.name} </div>
                            <div className="small_head text-[1.2rem] leading-none font-syne text-[#000]"> {person.role} </div>
                            <div className="small_head text-[1.2rem] leading-none font-syne text-[#000]"> {person.email} </div>
                            <div className="small_head text-[1.2rem] leading-none font-syne text-[#000]"> {person.tag} </div>
                        </div>
                        
                        </div>
                    ))}

                </div>
            </div>

        </div>

    </div>
  )
}
