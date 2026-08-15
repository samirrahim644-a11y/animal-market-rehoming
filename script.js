// ===============================
// ANIMAL MARKET REHOMING
// ===============================


// CONVERSION USD -> EUR
// Taux indicatif à modifier si nécessaire.
const USD_TO_EUR = 0.91;


// ===============================
// FILTRER LES ANIMAUX
// ===============================

function filterAnimals() {

  const search =
    document.getElementById("searchInput").value.toLowerCase().trim();

  const species =
    document.getElementById("speciesFilter").value;

  const price =
    document.getElementById("priceFilter").value;

  const cards =
    document.querySelectorAll(".animal-card");

  let visibleAnimals = 0;

  cards.forEach(card => {

    const name =
      card.dataset.name.toLowerCase();

    const cardSpecies =
      card.dataset.species;

    const cardPrice =
      Number(card.dataset.price);

    let matchesSearch =
      name.includes(search);

    let matchesSpecies =
      species === "all" ||
      cardSpecies === species;

    let matchesPrice = true;

    if (price === "0-300") {
      matchesPrice =
        cardPrice >= 0 &&
        cardPrice <= 300;
    }

    if (price === "301-700") {
      matchesPrice =
        cardPrice >= 301 &&
        cardPrice <= 700;
    }

    if (price === "701") {
      matchesPrice =
        cardPrice >= 701;
    }

    if (
      matchesSearch &&
      matchesSpecies &&
      matchesPrice
    ) {

      card.style.display = "block";
      visibleAnimals++;

    } else {

      card.style.display = "none";

    }

  });

  const noResults =
    document.getElementById("noResults");

  if (visibleAnimals === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}


// ===============================
// RECHERCHE AUTOMATIQUE
// ===============================

document
  .getElementById("searchInput")
  .addEventListener("input", filterAnimals);

document
  .getElementById("speciesFilter")
  .addEventListener("change", filterAnimals);

document
  .getElementById("priceFilter")
  .addEventListener("change", filterAnimals);


// ===============================
// CONTACTER POUR UN ANIMAL
// ===============================

function contactAnimal(animalName) {

  const phoneNumber = "12297207712";

  const message =
    `Bonjour, je suis intéressé(e) par l'animal "${animalName}" publié sur Animal Market Rehoming. Pouvez-vous me donner plus d'informations ?`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}


// ===============================
// FORMULAIRE
// ===============================

document
  .getElementById("animalForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const ownerName =
      document.getElementById("ownerName").value;

    const ownerEmail =
      document.getElementById("ownerEmail").value;

    const animalName =
      document.getElementById("animalName").value;

    const animalSpecies =
      document.getElementById("animalSpecies").value;

    const animalAge =
      document.getElementById("animalAge").value;

    const animalPrice =
      document.getElementById("animalPrice").value;

    const description =
      document.getElementById("animalDescription").value;


    const message =
`Bonjour Animal Market Rehoming,

Je souhaite proposer un animal.

Nom du propriétaire : ${ownerName}
Email : ${ownerEmail}

Animal : ${animalName}
Espèce : ${animalSpecies}
Âge : ${animalAge}
Prix : $${animalPrice}

Description :
${description}`;


    const phoneNumber =
      "12297207712";

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    alert(
      "Votre demande va être ouverte dans WhatsApp."
    );

  });


// ===============================
// AFFICHER LES PRIX EN EURO
// ===============================

document
  .querySelectorAll(".animal-card")
  .forEach(card => {

    const price =
      Number(card.dataset.price);

    const euroPrice =
      Math.round(price * USD_TO_EUR);

    const euroElement =
      card.querySelector(".card-bottom span");

    if (euroElement) {
      euroElement.textContent =
        `≈ €${euroPrice}`;
    }

  });
