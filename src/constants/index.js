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
import Carousel from "../components/Carousel";


export const navLinks = [
  {
    id: "AboutUs",
    title: "Sobre nós",
  },
  {
    id: "work",
    title: "Ferramentas",
  },
  {
    id: "Work",
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
      "Feliz por fazer parte desta empresa de software, onde construímos não só código, mas também laços de colaboração e inovação. #OrgulhoDaEquipe",
    name: "Mateus Cardoso",
    designation: " Full Stack Developer",
    company: "Instagram",
    image: "https://pps.whatsapp.net/v/t61.24694-24/156765057_301941441860597_190039662309890083_n.jpg?ccb=11-4&oh=01_AdTG-LKtQJtUvlyvKjBRA9fNM-7eRqyl0pOAbv45apCUmQ&oe=64D805E8",
  },
  {
    testimonial:
    "Nada me deixa mais feliz do que fazer parte dessa equipe de desenvolvimento de software. Cada dia aqui é uma oportunidade de transformar ideias em realidade através do código. Orgulho total! 💻👏",
    name: "Vitor Machado",
    designation: "Full Stack Developer",
    company: "Instagram",
    image: "https://pbs.twimg.com/profile_images/1658174743617437699/s8ABTqMi_400x400.jpg",
  },
  {
    testimonial:
    "Trabalhar nesta empresa de desenvolvimento de software é um privilégio incrível! Cada dia é uma oportunidade de aprender, crescer e contribuir para projetos inovadores.",
    name: "Vinicius Sieben",
    designation: " Full Stack Developer",
    image: "https://pbs.twimg.com/profile_images/1630221654415622146/jE0k5SdT_400x400.jpg",
  },
];

const projects = [
 {
    name: "Photographer",
    description:
      "Conheça o nosso template para portfolio, ideal para fotógrafos e filmmakers. Interface moderna, alta resolução para imagens e vídeos, personalização fácil e totalmente responsivo. Destaque-se no mercado! Experimente agora mesmo.",
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
    image: '/src/assets/photo1.png',
    source_code_link: "https://fotografia-red.vercel.app/"
  },
  {
    name: "Petshop",
    description:
      "Destaque seu petshop com nosso template exclusivo. Design moderno, navegação intuitiva e compatibilidade com dispositivos móveis. Personalize com informações sobre seus serviços e integre redes sociais. Eleve sua presença online agora!",
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
    image: '/src/assets/petshop.jpeg',
    source_code_link: "https://petshop-flame.vercel.app/"
  },
  {
    name: "Tattoo Studio",
    description:
      "Design artístico e atrativo, navegação intuitiva em todos os dispositivos. Personalize com portfólio de trabalhos, detalhes dos artistas e serviços oferecidos. Integre suas redes sociais e aumente sua visibilidade. Liberte a criatividade do seu studio!",
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
    image: '/src/assets/tattoo.jpeg',
    source_code_link: "https://tatto-studio-beta.vercel.app"
  }
  
];

export { services, testimonials, projects };
