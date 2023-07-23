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
        <About />
      <div class="bg-secondary-background">
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
      </div>
        </div>
          <Contact />

      </div>
    </BrowserRouter>
  );
}

export default App;
