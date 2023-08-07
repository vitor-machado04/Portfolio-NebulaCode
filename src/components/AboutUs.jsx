import React from 'react'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import StarsCanvas from "./canvas/Stars";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "/src/assets/AboutUs.jpg"

const AboutUs = () => {
  return (
<>
<motion.div variants={textVariant()}>
  <h2 className={`${styles.sectionHeadText} max-sm:text-center mb-6`}>Sobre nós?</h2>

      </motion.div>
      <div className={`xl:mt-3 flex-col gap-10 overflow-hiddena border-t-8 rounded-[20px] border-violet-500`} >
  <div className='flex-[0.75] bg-sky-500/10 p-8 rounded-2xl'>
    <div className="flex flex-col items-center justify-end md:flex-row md:items-center">
      <motion.img variants={fadeIn("", "", 0.1, 1)}
         src='/src/assets/AboutUs.jpg' className="w-100 h-60 rounded-[20px] order-last md:order-first" alt="Imagem da empresa" />
      <motion.h2 variants={fadeIn("", "", 0.1, 1)}
        className='w-full text-2xl font-black md:w-11/12 md:mt-16 md:mb-12 max-sm:text-center max-w-[100%] text-left md:ml-10'>
        Somos uma empresa que preza pela entrega de soluções ágeis e inteligentes!
        <p className="font-light text-lg tracking-wider max-sm:text-center max-sm:mb-3 max-w-[100%] mt-4">
          Nossa missão é utilizar a tecnologia como uma ferramenta para potencializar os negócios de nossos clientes. Por isso estamos sempre empenhados em ajudar nossos clientes a alcançarem o sucesso que desejam.
        </p>
        <motion.button variants={fadeIn("", "", 0.1, 1)}
        className="bg-primary text-white font-light py-1 px-5 mb-7 rounded mt-3">
          Saiba mais
        </motion.button>
      </motion.h2>
    </div>
    <StarsCanvas/>
  </div>
</div>
    </>
  );
};

export default SectionWrapper(AboutUs, "AboutUs");
