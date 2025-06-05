import { Card, Badge } from "react-bootstrap";

const experience = [
  {
    title: "Estudiante de Ingeniería en ciencias de la computación y tecnologías de la información",
    company: "Universidad del Valle de Guatemala",
    period: "2023 - Presente",
    description:
      "Aprendo sobre programación, desarrollo web y tecnologías emergentes. Participación en proyectos académicos y colaborativos.",
  },
  {
    title: "Bachiller en Ciencias y Letras con Orientación en Computación",
    company: "Colegio Suizo Americano",
    period: "2021 - 2022",
    description:
      "Formación integral en ciencias, matemáticas y computación. Desarrollo de habilidades analíticas y de resolución de problemas.",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-5 section-bg">
      <div className="container">
        <h2 className="text-center mb-4">Experiencia</h2>

        <div className="mx-auto" style={{ maxWidth: "720px" }}>
          {experience.map((exp, idx) => (
            <Card key={idx} className="mb-4 shadow-sm">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Subtitle className="subtitle-mode">{exp.company}</Card.Subtitle>
                </div>
                <Badge bg="secondary">{exp.period}</Badge>
              </Card.Header>
              <Card.Body>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
