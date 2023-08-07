import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { Viewicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import StarsCanvas from "./canvas/Stars";
import Carousel from "./Carousel";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-sky-500/10  p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
      <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-fifth opacity-70	 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={Viewicon} 
              alt="source code" 
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} max-sm:text-center `}>Nosso trabalhos</p>
        <h2 className={`${styles.sectionHeadText} max-sm:text-center`}>Projetos</h2>
      </motion.div>

      <div className="w-full flex max-sm:text-center" >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
>
          Os projetos a seguir mostram nossas habilidades e experiência por meio
          de exemplos do mundo real do meu trabalho. Cada projeto é brevemente
          descrito com links para repositórios de código e demonstrações ao
          vivo. Isso reflete nossa capacidade de resolver problemas complexos,
          trabalhar com diferentes tecnologias e gerenciar projetos de forma
          eficaz.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <StarsCanvas/>
    </>
  );
};

export default SectionWrapper(Works, "Work");
