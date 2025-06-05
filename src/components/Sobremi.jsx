import { TextoSobreMi } from "./TextoSobreMi";
import { HabilidadesTecnicas } from "./HabilidadesTecnicas";
import { Galeria } from "./Galeria";

export default function SobreMi() {
    return (
        <section id="sobre-mi" className="py-5 section-bg">
            <div className="container">
                <h2 className="text-center mb-5">Sobre mí</h2>

                <div className="row">
                    {/* Columna izquierda - Texto */}
                    <div className="col-md-6 mb-4">
                        <TextoSobreMi />
                    </div>

                    {/* Columna derecha - Galería + NASA */}
                    <div className="col-md-6 mb-4">
                        <Galeria />
                    </div>
                </div>

                {/* Habilidades técnicas debajo */}
                <div className="row mt-4">
                    <div className="col">
                        <HabilidadesTecnicas />
                    </div>
                </div>
            </div>
        </section>
    );
}
