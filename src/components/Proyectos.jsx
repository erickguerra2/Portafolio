import { Button, Badge, Card } from "react-bootstrap";

const projects = [
    {
        title: "Lab 1 - El internet antes de la web",
        description: "Exploración de servicios de red antiguos como Telnet para conocer el funcionamiento del internet antes de la web moderna.",
        technologies: ["Telnet", "Telehack", "Terminal"],
        github: "https://23208.dernait.my/lab1/lab1.txt",
        demo: "https://23208.dernait.my/lab1/",
    },
    {
        title: "Lab 2 - Comandos en servidores remotos",
        description: "Conexión SSH a un servidor para ejecutar comandos de red, diagnóstico y análisis de tráfico.",
        technologies: ["SSH", "Linux", "httpie", "curl", "netstat", "dig"],
        github: "https://23208.dernait.my/lab2/lab2.txt",
        demo: "https://23208.dernait.my/lab2/",
    },
    {
        title: "Lab 3 - HTML interactivo: historia no lineal",
        description: "Creación de una historia interactiva utilizando únicamente HTML y enlaces para navegar entre rutas.",
        technologies: ["HTML5", "Navegación", "Enlaces relativos"],
        github: "https://github.com/erickguerra2/lab3",
        demo: "https://23208.dernait.my/lab3/",
    },
    {
        title: "Lab 4 - Imagen con solo HTML y CSS",
        description: "Diseño de una imagen compleja sin usar imágenes externas, sólo código HTML y estilos CSS.",
        technologies: ["HTML", "CSS Puro", "Flexbox", "Selectores"],
        github: "https://github.com/erickguerra2/lab4-css",
        demo: "https://23208.dernait.my/lab4-css/",
    },
    {
        title: "Lab 5 - Chat simple con JavaScript",
        description: "Chat funcional sin librerías usando fetch para comunicarse con una API REST externa.",
        technologies: ["JavaScript", "Fetch API", "DOM", "Eventos"],
        github: "https://github.com/erickguerra2/lab5-js",
        demo: "https://23208.dernait.my/lab5-js/",
    },
    {
        title: "Lab 6 - Juego de memoria en React",
        description: "Desarrollo de un juego de memoria en React usando hooks y componentes funcionales.",
        technologies: ["React", "JSX", "Hooks", "Estados"],
        github: "https://github.com/erickguerra2/lab6-react",
        demo: "https://23208.dernait.my/lab6-react/",
    },
    {
        title: "Calculadora con React",
        description: "Calculadora interactiva con operaciones básicas, desarrollada con React y pruebas.",
        technologies: ["React + Vite", "JavaScript", "CSS", "ESLint", "Vitest"],
        github: "https://github.com/erickguerra2/Calculadora",
        demo: "https://23208.dernait.my/Calculadora/",
    },
];



    export default function Projects() {
    return (
        <section id="proyectos" className="py-5">
        <div className="container">
            <h2 className="text-center mb-4">Proyectos Destacados</h2>

            <div className="row g-4">
            {projects.map((project, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                <Card className="h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>

                    <div className="mb-3">
                        {project.technologies.map((tech) => (
                        <Badge bg="outline-primary" text="primary" key={tech} className="me-1">
                            {tech}
                        </Badge>
                        ))}
                    </div>

                    <div className="ratio ratio-16x9 mb-3">
                        <iframe
                        src={project.demo}
                        title={`Preview de ${project.title}`}
                        allowFullScreen
                        loading="lazy"
                        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                        />
                    </div>

                    <div className="mt-auto d-flex gap-2">
                        <Button
                        variant="outline-primary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Código
                        </Button>
                        <Button
                        variant="primary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Ir al sitio
                        </Button>
                    </div>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
