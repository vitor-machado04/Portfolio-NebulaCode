import { BrowserRouter } from "react-router-dom";

import { About, Contact, Feedbacks, Hero, Navbar, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
      <div class="bg-gradient-to-b from-[#1a0c2d] to-[#0d051b] w-full h-full">
        <About />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
      </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
