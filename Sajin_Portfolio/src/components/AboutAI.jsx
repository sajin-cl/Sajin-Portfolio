
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { AI_DATA } from "@/config/data";

export default function AboutAI() {

    const textRef = useRef(null);

    useEffect(() => {
        const originalText = "ASK AI ABOUT SAJIN.CL";
        const animation = { progress: 0 };

        const tween = gsap.to(animation, {
            progress: originalText.length,
            duration: 2,
            repeat: -1,
            repeatDelay: 2,
            onUpdate: () => {
                textRef.current.textContent = originalText
                    .split("")
                    .map((c, i) =>
                        c === " " || i < animation.progress
                            ? c
                            : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)]
                    )
                    .join("");
            },
        });

        return () => tween.kill();
    }, []);

    return (
        <section
            id="aboutme-ai"
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 container mx-auto mt-10 px-4"
        >
            <p
                ref={textRef}
                aria-label="ASK AI ABOUT SAJIN.CL"
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-mono text-gray-200 tracking-wide text-center md:text-left leading-tight"
            >
                ASK AI ABOUT SAJIN.CL
            </p>

            <MdKeyboardDoubleArrowRight className="shrink-0 text-lime-300 text-4xl md:text-6xl rotate-90 md:rotate-0" />

            <div className="ai-collection flex flex-wrap items-center justify-center gap-4 md:gap-5 ">

                {AI_DATA.map((ai) => (
                    <>
                        <a
                            href={ai?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={ai?.id}
                            className="hover:animate-pulse p-2 border-x-2 border-gray-400 rounded-full animate-spin"
                        >
                            <img
                                src={ai?.path}
                                alt={ai?.name}
                                title={ai?.name}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-contain cursor-pointer bg-gray-200 border border-transparent hover:border-lime-300 hover:scale-110 rounded-full p-2"
                            />
                        </a>
                        
                    </>
                ))}

            </div>
        </section>
    );
}