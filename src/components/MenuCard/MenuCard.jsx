// Componente MenuCard: recreacion del menu de Akari Sushi (sushi, sashimi y fusion rolls) con nombres y precios.

import React from "react";
import "./MenuCard.css";

const sashimiRows = [
  { name: "Tuna", p3: "8", p6: "15" },
  { name: "Bluefin Tuna", p3: "10.5", p6: "19" },
  { name: "Yellowtail", p3: "8", p6: "15" },
  { name: "Salmon", p3: "7.5", p6: "14" },
  { name: "Albacore", p3: "7.5", p6: "14" },
  { name: "Octopus", p3: "7.5", p6: "14" },
  { name: "Escolar", p3: "7.5", p6: "14" },
];

const fusionRolls = [
  { name: "California Roll", price: "6" },
  { name: "Spicy Tuna Roll", price: "7" },
  { name: "Spicy Albacore Roll", price: "7" },
  { name: "Tuna Roll", price: "6" },
  { name: "Salmon Roll", price: "6" },
  { name: "Salmon Skin Roll", price: "6" },
  { name: "Yellowtail Roll", price: "6.5" },
  { name: "Shrimp Roll", price: "5.5" },
  { name: "Scallop Roll", price: "5.5" },
  { name: "Avocado Roll", price: "5" },
  { name: "Cucumber Roll", price: "4.75" },
  { name: "Vegetable Roll", price: "5.5" },
];

const sushiItems = [
  { name: "Tuna", sub: "(Maguro)", desc: "Fresh tuna", price: "2.9", fish: "#e64d4d" },
  { name: "Bluefin Tuna", desc: "Hon maguro", price: "3.75", fish: "#b83d3e" },
  { name: "Salmon", sub: "(Sake)", desc: "Fresh salmon", price: "2.75", fish: "#ff7b45" },
  { name: "Yellowtail", sub: "(Hamachi)", desc: "Fresh hon hamachi", price: "2.9", fish: "#f1a0a0" },
  { name: "Escolar", desc: "With green onions & mustard dressing", price: "2.75", fish: "#f0e2bd" },
  { name: "Seared Tuna", desc: "Seared with Japanese shichimi & pepper", price: "2.9", fish: "#db4940" },
  { name: "Seared Albacore", desc: "Seared with Japanese shichimi & pepper", price: "2.8", fish: "#f4b8a1" },
  { name: "Halibut", desc: "With green onions, lemon juice, sea salt", price: "2.9", fish: "#efe0b9" },
  { name: "Amberjack", desc: "Ponzu yuzu kosho", price: "3.5", fish: "#d6b292" },
  { name: "Mackerel", desc: "House marinated with vinegar", price: "2.9", fish: "#e6d2ab" },
  { name: "Scallop", desc: "Scallop mixed with mayo", price: "2.9", fish: "#f2eddf" },
  { name: "Smelt Egg", desc: "Flying fish egg", price: "2.25", fish: "#f09325" },
  { name: "Shrimp", desc: "House-made black tiger shrimp", price: "2.8", fish: "#ff9d61" },
  { name: "Octopus", desc: "Cooked octopus", price: "2.5", fish: "#e6d6cb" },
  { name: "Fresh Water Eel", desc: "Baked unagi with eel sauce", price: "3.75", fish: "#b35b28" },
  { name: "Squid", desc: "With shiso leaf", price: "2.5", fish: "#e8f2ea" },
  { name: "Crab", desc: "Snow crab leg", price: "2.9", fish: "#f89c78" },
  { name: "Egg", desc: "Japanese omelette", price: "2.25", fish: "#f7d466" },
  { name: "Spanish Mackerel", desc: "With green onion & fresh ginger", price: "3.5", fish: "#ceb18a" },
  { name: "Jumbo Scallop", desc: "Jumbo scallop with lemon & yuzu kosho", price: "3.5", fish: "#e7c184" },
  { name: "Salmon Egg", desc: "House marinated with soy sauce & mirin", price: "3.25", fish: "#d93f33" },
  { name: "Fatty Yellowtail", desc: "Yellowtail belly", price: "3.25", fish: "#f3d9b8" },
  { name: "Sea Urchin", desc: "Fresh sea urchin", price: "6.9", fish: "#e28a29" },
  { name: "Sweet Shrimp", desc: "With fried shrimp head", price: "5.5", fish: "#f6c5aa" },
  { name: "Fatty Tuna", desc: "Bluefin o-toro", price: "MP", fish: "#efb5a9" },
];

const MenuCard = () => {
  return (
    <div className="akari-menu-wrap">
      <main className="akari-menu">
        <header className="brand">
          <div>
            <h1>Akari Sushi</h1>
            <p>Japanese kitchen · Sushi bar · Fresh daily</p>
          </div>
          <div className="mark">明</div>
        </header>

        <div className="grid">
          <section className="left">
            <div className="hero-card">
              <span>Omakase Sushi — nine &amp; only · 40</span>
            </div>

            <div>
              <div className="photo"></div>
              <div className="caption">
                <span>
                  Assorted Sashimi <small>(10pcs.)</small>
                </span>
                <span>26</span>
              </div>
            </div>

            <section className="section">
              <h2 className="section-title">Sashimi</h2>
              <table className="list">
                <thead>
                  <tr>
                    <th></th>
                    <th>(3pcs)</th>
                    <th>(6pcs)</th>
                  </tr>
                </thead>
                <tbody>
                  {sashimiRows.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.p3}</td>
                      <td>{row.p6}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      Assorted Sashimi{" "}
                      <span className="sub">Tuna, salmon, yellowtail, albacore</span>
                    </td>
                    <td>10 pcs</td>
                    <td>26</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="section fusion">
              <h2 className="section-title">Fusion Roll</h2>
              <table className="list">
                <tbody>
                  {fusionRolls.map((roll) => (
                    <tr key={roll.name}>
                      <td>{roll.name}</td>
                      <td>{roll.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>

          <section className="right section">
            <div className="sushi-header">
              <h2 className="section-title">Sushi</h2>
              <div className="price-label">(1pc)</div>
            </div>
            <div className="sushi-list">
              {sushiItems.map((item) => (
                <article
                  className="sushi-item"
                  style={{ "--fish": item.fish }}
                  key={item.name}
                >
                  <div>
                    <h3>
                      {item.name} {item.sub && <small>{item.sub}</small>}
                    </h3>
                    <span className="sub">{item.desc}</span>
                  </div>
                  <div className="sushi-piece"></div>
                  <div className="price">{item.price}</div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <footer className="footer">
          <span>Akari Sushi</span>
          <span>Fresh rolls, made daily</span>
        </footer>
      </main>
    </div>
  );
};

export default MenuCard;
