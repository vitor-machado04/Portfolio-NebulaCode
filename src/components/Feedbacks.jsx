import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import StarsCanvas from "./canvas/Stars";

const FeedbackCard = ({ testimonial, name, designation, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[1015px] w-full">
     <p className='text-white font-black text-[48px]'>"</p>

<div className='mt-1'>
  <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

  <div className='mt-7 flex justify-between items-center gap-1'>
    <div className='flex-1 flex flex-col'>
      <p className='text-white font-medium text-[16px]'>
        <span className='blue-text-gradient'>@</span> {name}
      </p>
      <p className='mt-1 text-secondary text-[12px]'>
        {designation}
      </p>
    </div>

    <img
      src={image}
      alt={`feedback_by-${name}`}
      className='w-10 h-10 rounded-full object-cover'
    />
  </div>
</div>
  </div>
);

const Feedbacks = () => {
  const sliderSettings = {
    dots: false,
    arrows: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`mt-14 bg-black-100/10 rounded-[20px]`}>
      <div className={`bg-fifth  rounded-2xl ${styles.padding} min-h-[200px]`}>
        <StarsCanvas />
        <p className={styles.sectionSubText}>O que os outros dizem</p>
        <h2 className={styles.sectionHeadText}>Depoimentos</h2>
      </div>
      <div className={`-mt-10 pb-10 ${styles.paddingX} bg-fifth`}>
        <Slider {...sliderSettings}> 
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

