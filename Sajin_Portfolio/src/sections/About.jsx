import { motion } from "framer-motion";
import AboutHighlights from "@/components/AboutHighlights";
import AboutAI from "@/components/AboutAI";

const About = () => {


  return (
    <section id="about" className="min-h-screen bg-stone-950 mt-10 pt-5 overflow-x-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 py-4">
        {/* Left side video */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            poster="/hacker-preview.webp"
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
            preload="auto"
            className="object-contain p-3 w-full max-w-[540px] h-auto mix-blend-color-dodge scale-125"
          >
            <source src="https://res.cloudinary.com/dpc9p1npw/video/upload/f_auto,q_auto/hacker-intro_r7fdei.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 text-center md:text-left p-3 relative">
          <motion.h1
            className="h1 text-white py-3 text-center lg:text-left font-mono"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            ABOUT <span className="text-lime-300">ME </span>
            <span className="hidden md:inline-block">→</span>
          </motion.h1>

          <motion.h2
            className="text-sm font-semibold text-white py-3 font-sans text-center lg:text-left flex items-center lg:justify-normal justify-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >MERN STACK DEV </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >REACT DEVELOPER </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >NODE DEVELOPER </span>
            <span
              className="hidden md:block text-white rounded-full px-4 py-1 text-xs outline outline-lime-500 hover:bg-lime-400 hover:text-black cursor-pointer"
            >FREELANCER </span>
          </motion.h2>

          <motion.p
            className="text-white text-base leading-normal tracking-widest py-3 [word-spacing:0.25rem] md:[word-spacing:0.5rem] font-space text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
          >
            HELLO, I'M <span className="text-lime-300">SAJIN CL</span>, A
            <span className="text-lime-300"> FREELANCE WEB DEVELOPER</span> BUILDING SCALABLE FULL-STACK APPLICATIONS WITH REACT.JS, NEXT.JS, NODE.JS, EXPRESS, AND MONGODB. I FOCUS ON RESPONSIVE UI, SECURE BACKEND SYSTEMS, <span className="text-lime-300">SEO & SPEED OPTIMIZATION</span>.I ALSO CREATE PROFESSIONAL <span className="text-lime-300">POSTER DESIGNS</span> FOR DIGITAL MARKETING CAMPAIGNS AND BUSINESS PROMOTIONS.
          </motion.p>
        </div>
      </div>

      <AboutAI/>
      <AboutHighlights/>

    </section>
  );
};

export default About;