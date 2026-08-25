import { motion } from "framer-motion";

export default function Blog(){

    return(
        <section id="blog" className="min-h-screen bg-stone-950 mt-10 pt-5 overflow-x-hidden">
             {/* Title */}
        <div className="blog-headings w-full px-4 md:px-20 flex flex-col flex-wrap items-end gap-2">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-white"
          >
            BL<span className="text-lime-400">OG</span>S
          </motion.h1>

          <motion.p
            className="text-gray-400 text-xs tracking-wide font-mono"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400 text-xs">
              ARTICLES ON CURRENT TECHNOLOGIES
            </span>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="cards w-full px-4 md:px-20">
             
        </div>
        </section>

    );
};

 