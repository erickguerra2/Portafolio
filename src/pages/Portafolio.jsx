import Navbar from "../components/Navbar";
import Portada from "../components/Portada";
import Sobremi from "../components/Sobremi";
import Proyectos from "../components/Proyectos";
import Experiencia from "../components/Experiencia";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Portafolio() {
  return (
    <>
      <Navbar />
      <main>
        <Portada />
        <Sobremi />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
