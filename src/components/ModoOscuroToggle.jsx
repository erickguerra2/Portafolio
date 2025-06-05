import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function ModoOscuroToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    return (
        <Button
        variant={darkMode ? "light" : "dark"}
        onClick={() => setDarkMode(!darkMode)}
        >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </Button>
    );
}
