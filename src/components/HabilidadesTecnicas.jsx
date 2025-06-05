import { Badge } from "react-bootstrap";

const skills = [
    "JavaScript",
    "HTML",
    "React",
    "Laravel",
    "Vue.js",
    "Python",
    "PostgreSQL",
    "Git",
    "Docker",
    "CSS",
    "Java",
];

export function HabilidadesTecnicas() {
    return (
        <div>
        <h3>Habilidades Técnicas</h3>
        <div className="d-flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
            <Badge bg="secondary" key={skill} className="fs-6">
                {skill}
            </Badge>
            ))}
        </div>
        </div>
    );
}