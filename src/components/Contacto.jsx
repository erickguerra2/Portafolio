import { Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contacto" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">¿Trabajamos juntos?</h2>
        <p className="mb-4">
          Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. ¡No dudes en contactarme!
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="primary" size="lg" href="mailto:eagi578@gmail.com">
            eagi578@gmail.com
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            href="https://www.linkedin.com/in/erick-guerra-951797239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
