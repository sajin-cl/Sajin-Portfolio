import Counter from "@/components/Counter";
import { motion } from "framer-motion";
import { useState } from "react";
import { LEETCODE_PORBLEMS_COUNT } from "@/config/data";

const Leetcode = () => {

  const [start, setStart] = useState(false);//used for counter;

  return (
    <motion.section
      id="leetcode"
      onViewportEnter={() => setStart(true)}
      viewport={{ once: true, amount: 0.6 }}
      className="min-h-[400px] w-full flex justify-center items-center bg-stone-950"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10 px-6 relative">

        {/* Background Glow */}
        <div className="absolute w-[200px] h-[200px] bg-lime-400/10 rounded-full blur-[120px]"></div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-mono font-extrabold bg-linear-to-r from-lime-300 via-lime-200 to-gray-200 bg-clip-text text-transparent tracking-widest">
            LEET <span>CODE</span>
          </h1>

          <h2 className="text-sm md:text-lg font-mono font-semibold text-gray-400">
            SOLVED
            <span
              className="text-lime-300 font-inter mx-2">
              <Counter value={LEETCODE_PORBLEMS_COUNT} start={start} /> <span className="text-white">+</span>
            </span>
            CODING PROBLEMS ON LEETCODE
          </h2>
          <div>
            <span className="inline-block w-2 h-2 bg-lime-400 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] mr-2"></span>
            <span className="text-lime-300 font-mono text-xs">Programing Language :</span>
            <span className="text-white font-mono"> JavaScript</span>
          </div>

          <div className="text-white text-xs rounded-full border border-gray-800 px-5 py-1 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] ml-2"></span>
            Think
            <span className="inline-block w-2 h-2 bg-yellow-200 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] ml-2"></span>
            Plan
            <span className="inline-block w-2 h-2 bg-lime-400 rounded-full animate-[pulse_1s_linear_infinite] shadow-[0_0_8px_#84cc16] ml-2"></span>
            Execution
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center items-center">
          <img
            src="/leetCodeBadge.gif"
            alt="leetcode-badge"
            className="w-[200px] md:w-[260px] flex-shrink-0"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default Leetcode;