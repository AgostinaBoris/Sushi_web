// Componente Gallery: galeria visual de Akari Sushi con mosaico de fotos y lightbox al hacer click.

import React, { useEffect, useState } from "react";
import "./Gallery.css";

import goldenRoll from "../../assets/gallery/golden-roll.jpg";
import signatureSushiBoard from "../../assets/gallery/signature-sushi-board.jpg";
import akariInterior from "../../assets/gallery/akari-interior.jpg";
import sashimiSelection from "../../assets/gallery/sashimi-selection.jpg";
import modernDiningRoom from "../../assets/gallery/modern-dining-room.jpg";
import salmonNigiri from "../../assets/gallery/salmon-nigiri.jpg";
import akariPlatter from "../../assets/gallery/akari-platter.jpg";
import sushiBoat from "../../assets/gallery/sushi-boat.jpg";
import assortedRolls from "../../assets/gallery/assorted-rolls.jpg";
import chefsRoll from "../../assets/gallery/chefs-roll.jpg";

const images = [
  { src: goldenRoll, category: "Rolls", title: "Golden Roll" },
  { src: signatureSushiBoard, category: "Experience", title: "Signature Sushi Board" },
  { src: akariInterior, category: "Restaurant", title: "Akari Interior" },
  { src: sashimiSelection, category: "Sashimi", title: "Sashimi Selection" },
  { src: modernDiningRoom, category: "Ambience", title: "Modern Dining Room" },
  { src: salmonNigiri, category: "Nigiri", title: "Salmon Nigiri" },
  { src: akariPlatter, category: "Platters", title: "Akari Platter" },
  { src: sushiBoat, category: "Specials", title: "Sushi Boat" },
  { src: assortedRolls, category: "Combos", title: "Assorted Rolls" },
  { src: chefsRoll, category: "Signature", title: "Chef's Roll" },
];

export const Gallery = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="akari-gallery">
      <main className="page" id="top">
        <section className="gallery-hero">
          <div className="hero-content">
            <span className="eyebrow">Gallery</span>
            <h1>Akari Sushi</h1>
            <p>
              A visual gallery showcasing rolls, nigiri, sashimi, interiors
              and dining experiences with a modern, warm and premium
              aesthetic.
            </p>

            <div className="stats">
              <div className="stat">
                <strong>Fresh</strong>
                <span>Sushi</span>
              </div>
              <div className="stat">
                <strong>Premium</strong>
                <span>Style</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-head">
          <div>
            <span className="eyebrow">Selected photos</span>
            <h2>Signature Gallery</h2>
          </div>
          <p>
            Photos in a mosaic layout, with hover effects, soft edges and a
            category overlay. Tap any image to view it enlarged.
          </p>
        </section>

        <section className="gallery" aria-label="Akari Sushi image gallery">
          {images.map((image, index) => (
            <article className="gallery-card" key={image.title}>
              <button
                className="image-button"
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="card-overlay">
                  <span>{image.category}</span>
                  <h3>{image.title}</h3>
                </div>
              </button>
            </article>
          ))}
        </section>

        <section className="cta">
          <div>
            <h2>Reserve your Akari experience</h2>
            <p>
              Sushi bar, specialty rolls, fresh sashimi and a visual
              experience designed for social media, a digital menu or a
              landing page.
            </p>
          </div>
          <a className="button" href="#top">
            View Gallery
          </a>
        </section>
      </main>

      {activeImage && (
        <div className="lightbox active" onClick={() => setActiveIndex(null)}>
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close"
              type="button"
              onClick={() => setActiveIndex(null)}
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.title} />
            <div className="lightbox-caption">
              <strong>{activeImage.title}</strong>
              <span>{activeImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
