import { useEffect } from "react"
import ReactGA from "react-ga4"

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Portfolio } from "./components/Portfolio"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { WhatsAppButton } from "./components/WhatsAppButton"
import "./App.css"

function App() {
  useEffect(() => {
    // Inicializa o Google Analytics
    ReactGA.initialize("G-5TQKRJSQKS");
    // Envia um pageview padrão que representa o carregamento da página
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
