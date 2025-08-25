import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image"; // Import Next.js Image component

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >                 
                    <AnimatedTitle
                        text={"Hi I'm Prince Jeruh A. Reyes."}
                        className={
                            "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                    
                    {/* Avatar Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 md:mt-4"
                    >
                        <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white/20 overflow-hidden">
                            <Image
                                src="/avatar.jpg" // Update with your actual image path
                                alt="Prince Jeruh A. Reyes"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;