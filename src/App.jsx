import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Cars from './pages/Cars.jsx'
import Routes from './pages/Routes.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Cars />
        <Routes />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
