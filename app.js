const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stderr,
});

const checkNumbers = (value) => {
  const isNumber = /^\d+$/.test(value);

  if (!isNumber) {
    console.log(
      "Preencha a informação solicitada somente com números! Finalizando..."
    );
    process.exit(1);
  }
};

const calculateImc = (weight, height) => {
  const heightMeters = height / 100;
  const imc = weight / (heightMeters * 2);
  const imcInfo = `Seu IMC é de ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    return console.log(`${imcInfo}, Identificado como Magreza.`);
  }

  if (imc >= 18.5 && imc < 24.9) {
    return console.log(`${imcInfo}, Identificado como OK.`);
  }

  if (imc >= 24.9 && imc <= 30) {
    return console.log(`${imcInfo}, Identificado como Sobrepeso.`);
  }

  if (imc >= 30) {
    return console.log(`${imcInfo}, Identificado como Obesidade.`);
  }
};

rl.question(
  "Olá, seja bem-vindo para o cálculo de IMC, comece digitando sua altura em centímetros e sem pontuação:\n",
  (height) => {
    checkNumbers(height);
    rl.question("Agora informe o seu peso em quilos..\n", (weight) => {
      checkNumbers(weight);
      calculateImc(weight, height);
      rl.close();
    });
  }
);
