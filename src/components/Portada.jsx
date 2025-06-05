import { Button } from "react-bootstrap";

export default function Portada() {
    return (
        <section id="inicio" className="pt-5 mt-5 text-center">
        <div className="container">
            <img
            src="/img/Erick-Guerra2.png"
            alt="Tu foto"
            className="rounded-circle mb-4"
            style={{ width: "128px", height: "128px" }}
            />
            <h1 className="display-4 fw-bold">
            Hola, soy <span className="text-primary">Erick Guerra</span>
            </h1>
            <p className="lead mb-4">
            Estudiante de la carrera de Ingenieria en Ciencias de la Computación y Tecnologias de la Información en la
            Universidad del Valle de Guatemala. Me apasiona la programación y el desarrollo de software.
            </p>

            <div className="d-flex justify-content-center gap-3">
            <Button variant="link" href="https://github.com/erickguerra2">
                GitHub
            </Button>
            <Button variant="link" href="https://www.linkedin.com/in/erick-guerra-951797239/">
                LinkedIn
            </Button>
            <Button variant="link" href="mailto:eagi578@gmail.com">
                Email
            </Button>
            <Button variant="link" href="https://www.instagram.com/erick_guerra2/">
                Instagram
            </Button>
            </div>
        </div>
        </section>
    );
}
