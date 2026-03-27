'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray('.event-card', containerRef.current)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // Let's trigger it when the top of the box hits 10% down the screen, 
        // so it has a nice little breathing room at the top.
        start: "top 10%", 
        end: "+=500%", // Pins it for 1.5 screen lengths of scrolling
        pin: true,
        scrub: 1, 
      }
    })

   // tl.fromTo( elements, { START STATE }, { FINAL STATE } )

tl.fromTo(cards, 
  { 
    // THE START STATE
    y: 500, 
    opacity: 0 
  }, 
  { 
    // THE FINAL STATE
    y: 0, // 0 means "back to its natural CSS position"
    opacity: 1, 
    stagger: 0.4, 
    ease: "power2.out"
  }
)

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="Events bg-[#fff] rounded-[2rem] flex flex-col p-[2.5rem] pt-[4rem] gap-[4rem] relative z-2">
      {/* YOUR EXACT CSS RESTORED */}
      
      <div className="text">
        <div className="small_txt font-syne font-medium text-[1.2rem] h-[4rem] text-[#4b4b4b] leading-none whitespace-pre">The Arena</div>
        <div className="big_txt font-syne font-medium text-[2rem] leading-[2.6rem] w-[80%]">Step out of the lecture hall and into the grid. This is our tactical proving ground. We force our collective through intensive hardware battles, algorithmic sprints, and late-night build sessions to separate the theorists from the actual architects of tomorrow</div>
      </div>
      
      <div className="cards flex gap-[0.85rem]">
        
        {/* All I added here was the 'event-card' class so GSAP can find them */}
        <div className="event-card card flex flex-col h-[30rem] bg-[#88b2e3] rounded-[1rem] pt-[1.2rem] px-[1.5rem]">
            <div className="title text-[2rem] font-syne font-medium text-[#fff]">Genesis</div>
            <div className="image w-full bg-[#ddd] h-[50%] rounded-[1rem] mt-[1rem]"></div>
            <div className="title text-[1.1rem] font-syne font-medium text-[#fff] leading-tight mt-[0.75rem]">Step out of the lecture hall and into the grid. This is our tactical proving ground. We force our collective through intensive hardware battles, algorithmic sprints, and late-night build sessions to separate the </div>
        </div>
       
        <div className="event-card card flex flex-col h-[30rem] bg-[#88b2e3] rounded-[1rem] pt-[1.2rem] px-[1.5rem]">
            <div className="title text-[2rem] font-syne font-medium text-[#fff]">Genesis</div>
            <div className="image w-full bg-[#ddd] h-[50%] rounded-[1rem] mt-[1rem]"></div>
            <div className="title text-[1.1rem] font-syne font-medium text-[#fff] leading-tight mt-[0.75rem]">Step out of the lecture hall and into the grid. This is our tactical proving ground. We force our collective through intensive hardware battles, algorithmic sprints, and late-night build sessions to separate the </div>
        </div>
       
        <div className="event-card card flex flex-col h-[30rem] bg-[#88b2e3] rounded-[1rem] pt-[1.2rem] px-[1.5rem]">
            <div className="title text-[2rem] font-syne font-medium text-[#fff]">Genesis</div>
            <div className="image w-full bg-[#ddd] h-[50%] rounded-[1rem] mt-[1rem]"></div>
            <div className="title text-[1.1rem] font-syne font-medium text-[#fff] leading-tight mt-[0.75rem]">Step out of the lecture hall and into the grid. This is our tactical proving ground. We force our collective through intensive hardware battles, algorithmic sprints, and late-night build sessions to separate the </div>
        </div>
       
        <div className="event-card card flex flex-col h-[30rem] bg-[#88b2e3] rounded-[1rem] pt-[1.2rem] px-[1.5rem]">
            <div className="title text-[2rem] font-syne font-medium text-[#fff]">Genesis</div>
            <div className="image w-full bg-[#ddd] h-[50%] rounded-[1rem] mt-[1rem]"></div>
            <div className="title text-[1.1rem] font-syne font-medium text-[#fff] leading-tight mt-[0.75rem]">Step out of the lecture hall and into the grid. This is our tactical proving ground. We force our collective through intensive hardware battles, algorithmic sprints, and late-night build sessions to separate the </div>
        </div>
       
      </div>
    </div>
    
  )
}