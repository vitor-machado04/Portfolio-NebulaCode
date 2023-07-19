import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas} from "../components/canvas"


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      message: form.message,
      email: form.email
    }
    emailjs.send('service_1h6t5wf', 'template_46psuak', templateParams, 'LvMM2M8AxESdWA5kI')
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Fale conosco!</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu Nome?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu E-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu melhor e-mail?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que você quer nos dizer?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>

      <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[500px] '> 
      <h3 className="mb-7 ">
        <b className="text-2xl mr-0.5 ">
          NEBULA
        </b>
        <b className="text-2xl
        font-extralight border-b border-gray-500">
        CODE
        </b>
        <b className="text-3xl mx-1 font-light text-gray-500">
          |
        </b>
        <b className=""> 
          <span className="text-sm text-blue-500 mr-3 font-light break-keep">#DesenvolvimentoWeb,</span>
          <span className="text-sm text-emerald-500 mr-3 font-light break-all">#DesignUX|UI,</span>
          <span className="text-sm text-rose-500 mr-3 font-light break-all">#Softwares,</span>
          <span className="text-sm text-amber-500 mr-3 font-light break-al">#SocialMedia</span>
        </b>
      </h3>
      <h2 className="text-5xl font-bold w-11/12 mt-16 mb-4 max-sm:text-center">
      Transforme sua ideia em realiade digital!
      </h2>
      <p className="tracking-wider">
      A NebulaCode é uma agência especializada em desenvolvimento de software personalizado, criando soluções únicas e eficientes para atender às necessidades de cada cliente. Conte conosco para transformar suas ideias em realidade digital. 
      </p>
      </div>

      
    </div>
    
  );
};

export default SectionWrapper(Contact, "contact");
