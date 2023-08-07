import "./Carousel.css";
import React from 'react'
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Images from "./images";


function Carousel () {
  
  const[width, setWidth] = useState (0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  return (
    
    <div className='Carousel '>   
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}}
         className="inner-carousel">
            {Images.map((image, index) => {
              return(
                <motion.div className=" item " key={image}> 
                  <img src={image} key={index}/>
                </motion.div>
                
              )
            })}
      
        </motion.div>
      </motion.div>

    </div>
  );
}



export default Carousel;