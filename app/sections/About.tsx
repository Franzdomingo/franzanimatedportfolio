import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Franz Phillip Gatmen Domingo"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                    <AnimatedBody text="I'm Franz Domingo, a BSCSSE student at FEU Tech and a software engineer specializing in Python, JavaScript, React, and Node.js. My focus: clean, maintainable, and well-documented full-stack code—preferably cloud-deployed and battle-tested in real projects." />

                    <AnimatedBody
                        delay={0.1}
                        text="I thrive on learning by doing—debugging, prompt engineering, building optimized systems, and sometimes breaking things just to figure out how they work. Most days, I'm integrating LLMs, tinkering with deployment pipelines, or hunting for the next bottleneck to squash."
                    />

                    <AnimatedBody
                        delay={0.2}
                        text="My toolkit is always evolving, but right now I’m leveling up in containerization (Docker), prompt engineering, and machine learning. I value collaboration, candid code reviews, and real feedback—no cargo culting, no endless theory without results."
                    />

                    <AnimatedBody
                        delay={0.3}
                        text="If you care about well-architected solutions, practical engineering, and the kind of team that challenges each other to get better, let’s talk. I'm open to new opportunities, collaborations, and a good debate on best practices."
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
