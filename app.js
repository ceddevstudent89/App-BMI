const BMIData = [
  { name: "maigreur sévère", color: "#d42e2e", range: [1, 16] },
  { name: "maigreur modéré", color: "#f44e1e", range: [16, 17] },
  { name: "Légèrement maigre", color: "#ff5f01", range: [17, 18.5] },
  { name: "Bonne santé", color: "#00acc4", range: [18.5, 25] },
  { name: "Surpoids", color: "#039789", range: [25, 30] },
  { name: "Obésité modéré", color: "#fea100", range: [30, 35] },
  { name: "Obésité sévère", color: "#f55020", range: [35, 40] },
  { name: "Obésité morbide", color: "#d42e2e", range: 40 },
];

// IMC = poids en kg / taille² en mètre

// sélection des éléments du DOM
const form = document.querySelector("form");
// voir les difféérentes méthodes
console.dir(form);
form.addEventListener("submit", handleForm);
function handleForm(event) {
  // Prévenir le comportement par défaut du navigateur
  event.preventDefault();

  calculareBMI();
}

const inputs = document.querySelectorAll("input");
console.log(inputs);

function calculareBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  console.log({
    height,
    weight,
  });
  if (!height || !weight || height <= 0 || weight <= 0) {
    console.log("Error");
    handlerError();
    // Si chaine vide ou inférieur ou égale à zéro appel la fonction hanfleError
    // return car on exécute pas le reste
    return;
  }
  // Sinon calcul de IMC
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(2);
  console.log(BMI);
  // fonction afficher le résultat
  showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handlerError() {
  displayBMI.textContent = "Wops";
  // actualisée la couleur de départ:
  displayBMI.style.color = "inherit";
  result.textContent = "Remplissez correctement les champs.";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) {
      return data;
      // Gérer le dernier cas du tableau BMIData
    } else if (typeof data.range === "number" && BMI >= data.range) {
      return data;
    }
  });
  console.log(rank);
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
}
