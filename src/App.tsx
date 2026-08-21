import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import { Hero } from "./components/sections/Hero";
import { PainPoints } from "./components/sections/PainPoints";
import { Solution } from "./components/sections/Solution";
import { Authority } from "./components/sections/Authority";
import { Services } from "./components/sections/Services";
import { Segments } from "./components/sections/Segments";
import { HowItWorks } from "./components/sections/HowItWorks";
import { About } from "./components/sections/About";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <PainPoints />
        <Solution />
        <Authority />
        <Services />
        <Segments />
        <HowItWorks />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}

export default App;
