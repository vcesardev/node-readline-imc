const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stderr,
});

const checkNumbers = (value) => {
  return /^\d+$/.test(value);
};

const calculateImc = (weight, height) => {
  const heightMeters = height / 100;
  const imc = weight / (heightMeters * 2);
  return imc.toFixed(2);
};

rl.question(
  "Olá, seja bem-vindo para o cálculo de IMC, comece digitando sua altura em centímetros e sem pontuação:\n",
  (height) => {
    if (checkNumbers(height) === false) {
      console.log("Preencha sua altura somente com números! Finalizando...\n");
      rl.close();
    }
    rl.question("Agora informe o seu peso em quilos..\n", (weight) => {
      if (checkNumbers(weight) === false) {
        console.log("Preencha seu peso somente com números! Finalizando...\n");
        rl.close();
      }

      const imc = calculateImc(weight, height);
      console.log(`seu imc é ${imc}`);
      rl.close();
    });
  }
);
