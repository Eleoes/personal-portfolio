import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Journey from './components/journey/Journey';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Header />

    <main className="main">
      <Home />
      <About />
      <Journey />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
