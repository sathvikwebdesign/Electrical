import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#F24A4A] px-[4vw] py-16 flex flex-col text-black relative z-2">
  
  {/* Section Heading */}
  <h2 className="font-syne text-[1.6rem] font-bold mb-10">
    Design and dev
  </h2>
  
  {/* Contact Details */}
  <div className="flex flex-col gap-[2rem] font-outfit text-[1.4rem] font-medium mb-4 leading-0 ">
    <p>Sathvik</p>
    <p>+91 7032401686</p>
    <p>Sathvikreddyfootballer@gmail.com</p>
  </div>
  
  {/* Small Note */}
  <p className="font-outfit text-[clamp(0.8rem,1vw,1rem)]">
    *for better chances call/whatsapp me
  </p>
  
</footer>
  )
}
