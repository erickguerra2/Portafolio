import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";

const imagenesSobreMi = [
    { src: "/img/trajenasa.JPG", alt: "Traje espacial de la NASA" },
    { src: "/img/transbordador.JPG", alt: "Transbordador espacial" },
    { src: "/img/t-rex.JPG", alt: "Esqueleto de T-Rex" },
    { src: "/img/capitolio.JPG", alt: "Capitolio de Estados Unidos" },
    { src: "/img/ciclismo1.JPG", alt: "Ciclismo en la montaña" },
    { src: "/img/ciclismo2.JPG", alt: "Ciclismo en ciudad" },
    { src: "/img/futbol1.JPG", alt: "Jugando fútbol" },
    { src: "/img/iss.JPG", alt: "Estación Espacial Internacional (ISS)" },
    { src: "/img/jamesweb.JPG", alt: "Telescopio James Webb" },
    { src: "/img/nasa.JPG", alt: "Centro espacial de la NASA" },
];

export function Galeria() {
    const [nasaImage, setNasaImage] = useState(null);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=OlhA1FbLG62mXSbt2Nq6PsmFwQq5vz9f2gS9vN0X")
            .then((res) => {
            if (!res.ok) {
                if (res.status === 429) {
                throw new Error("Demasiadas peticiones a la API de NASA. Intenta más tarde.");
                }
                throw new Error("Error al obtener la imagen de la NASA.");
            }
            return res.json();
            })
            .then((data) => {
            if (data.media_type === "image") {
                setNasaImage({
                url: data.url,
                title: data.title,
                });
            }
            })
            .catch((err) => {
            console.warn(err.message);
            setNasaImage({
                url: "https://www.nasa.gov/wp-content/uploads/2022/07/web_first_images_release_0.png",
                title: "Imagen no disponible",
            });
            });
        }, []);



    return (
        <div className="row mt-4">
        <div className="col-md-6">
            <h5 className="mb-3">Galería personal</h5>
            <Carousel>
            {imagenesSobreMi.map((img, index) => (
                <Carousel.Item key={index}>
                <img
                    className="d-block w-100 rounded shadow"
                    src={img.src}
                    alt={img.alt}
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
        <div className="col-md-6">
            {nasaImage && (
            <div>
                <h5 className="mb-2">Imagen del día - NASA</h5>
                <img
                src={nasaImage.url}
                alt={nasaImage.title}
                className="img-fluid rounded shadow"
                style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <p className="mt-2">
                <strong>{nasaImage.title}</strong>
                </p>
            </div>
            )}
        </div>
        </div>
    );
}