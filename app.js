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
  return imc.toFixed(2);
};

rl.question(
  "Olá, seja bem-vindo para o cálculo de IMC, comece digitando sua altura em centímetros e sem pontuação:\n",
  (height) => {
    checkNumbers(height);
    rl.question("Agora informe o seu peso em quilos..\n", (weight) => {
      checkNumbers(weight);
      const imc = calculateImc(weight, height);
      console.log(`seu imc é ${imc}`);
      rl.close();
    });
  }
);
