import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre nós",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: " Desenvolvimento Web",
    icon: web,
  },
  {
    title: "Design UX|UI",
    icon: mobile,
  },
  {
    title: "Softwares",
    icon: backend,
  },
  {
    title: "Social Media",
    icon: creator,
  },
];

const testimonials = [

  {
    testimonial:
      "O Vitor além de lindo é muitooo inteligente!",
    name: "Jade Picon",
    designation: "Influencer",
    company: "Instagram",
    image: "https://i.em.com.br/0iipxCYDVP7C8XX3gF_gSpigV_M=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/03/03/1464489/jade-picon-vestida-de-chiara-_1_1461741.png",
  },
  {
    testimonial:
    "O Vitor além de lindo é muitooo inteligente!",
    name: "Duda Rubert",
    designation: "Influencer",
    company: "Instagram",
    image: "https://www.famousbirthdays.com/headshots/duda-rubert-4.jpg",
  },
  {
    testimonial:
    "O Vitor além de lindo é muitooo inteligente!",
    name: "Ana Castela",
    designation: "Cantora",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ana_Castela_2022.png",
  },
];

const projects = [
  {
    name: "Frango na Brasa",
    description:
      "Plataforma baseada na Web que permite aos usuário administrador gerenciar seu restaurante e franquias, fornecendo uma solução conveniente e eficiente para as necessidades de transporte",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: 'https://www.montarumnegocio.com/wp-content/uploads/2021/06/Como-assar-frango-na-brasa-para-vender.jpg',
    source_code_link: "https://github.com/"
  },
  {
    name: "Frango na Brasa",
    description:
      "Plataforma baseada na Web que permite aos usuário administrador gerenciar seu restaurante e franquias, fornecendo uma solução conveniente e eficiente para as necessidades de transporte",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: 'https://www.montarumnegocio.com/wp-content/uploads/2021/06/Como-assar-frango-na-brasa-para-vender.jpg',
    source_code_link: "https://github.com/"
  },
  {
    name: "Frango na Brasa",
    description:
      "Plataforma baseada na Web que permite aos usuário administrador gerenciar seu restaurante e franquias, fornecendo uma solução conveniente e eficiente para as necessidades de transporte",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
    ],
    image: 'https://www.montarumnegocio.com/wp-content/uploads/2021/06/Como-assar-frango-na-brasa-para-vender.jpg',
    source_code_link: "https://github.com/"
  }
];

export { services, testimonials, projects };
