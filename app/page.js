import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Textoverlay from "./components/Textoverlay"

import Events from "./components/Events"
import Faculty from "./components/Faculty"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
  
   <Hero/>
   <div className="bg-[#efeded] relative z-2">
    
   <Textoverlay/>

   <Events/>
   <Faculty/>
   <Footer/>
   </div>
    </>
  )
}