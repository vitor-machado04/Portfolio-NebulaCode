import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import StarsCanvas from "./canvas/Stars";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-sky-500/10 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="max-sm:text-center">
        <p className={styles.sectionSubText}>DESPERTE O POTENCIAL DE SUA EMPRESA E LEVE-A AO PRÓXIMO NÍVEL</p>
        <h2 className={styles.sectionHeadText}>Nossos serviços</h2>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        COM
 NOSSAS SOLUÇÕES DE SOFTWARE PERSONALIZADAS. JUNTE-SE A NÓS E JUNTOS
 CRIAREMOS UM FUTURO MAIS EFICIENTE E INOVADOR PARA O SEU NEGÓCIO!


      </motion.p>
        </motion.div>

      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <StarsCanvas/>
  
  

              
    </>                                 
  );  
};

export default SectionWrapper(About, "work");
