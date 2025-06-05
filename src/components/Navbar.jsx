import { useState } from "react";
import ModoOscuroToggle from "./ModoOscuroToggle";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
            <a className="navbar-brand fw-bold" href="#inicio">Portafolio</a>

            <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menú colapsable */}
            <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
                {["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"].map((section) => (
                <li className="nav-item" key={section}>
                    <a className="nav-link" href={`#${section}`} onClick={() => setIsMenuOpen(false)}>
                    {section === "inicio" ? "Inicio" :
                    section === "sobre-mi" ? "Sobre mí" :
                    section === "proyectos" ? "Proyectos" :
                    section === "experiencia" ? "Experiencia" :
                    "Contacto"}
                    </a>
                </li>
                ))}
            </ul>
            </div>

            {/* Aquí agregamos el toggle, fuera del menú colapsable */}
            <div className="d-flex align-items-center ms-3">
            <ModoOscuroToggle />
            </div>
        </div>
        </nav>
    );
}

