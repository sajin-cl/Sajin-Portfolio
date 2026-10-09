import { AI_DATA } from "@/config/data"

export default function AboutAI() {


    return (
        <section id="aboutme-ai" className="flex flex-col justify-center items-center md:items-end gap-5 container  mx-auto">
            <p className="border-y  border-lime-300 rounded-full text-gray-200 tracking-widest px-8 py-1 mt-10">
                ASK AI ABOUT <span className="text-lime-300">SAJIN.CL</span>
            </p>
            <div className="ai-collection flex gap-10 ">

                {AI_DATA.map((ai) => (

                    <a
                        href={ai?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={ai?.id}
                        className="animate-pulse"
                    >
                        <img
                            src={ai?.path}
                            alt={ai?.name}
                            width={ai?.width}
                            title={ai?.name}
                            className="cursor-pointer bg-gray-200 border border-transparent hover:border-lime-300 hover:scale-110 rounded-full p-2"
                        />
                    </a>

                ))}


            </div>
        </section>

    )
};