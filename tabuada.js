const createTabuada = (tabuadaLenght = 11) => {
  const listTabuada = Array(tabuadaLenght).fill(0);
  const numbersToCalculate = [];

  const subscribe = (number) => {
    numbersToCalculate.push(number);
  };

  const calculate = (numberToCalculate, index) => {
    const results = numberToCalculate * index;
    const label = `${numberToCalculate} x ${index} = ${results}`;

    return { results, label };
  };

  const logCalc = () => {
    numbersToCalculate.forEach((numberToCalculate) => {
      listTabuada.forEach((_, index) =>
        console.log(calculate(numberToCalculate, index).label)
      );
    });
  };

  return { calculate, logCalc, subscribe };
};

const tabuada = createTabuada(3);

tabuada.subscribe(102);
tabuada.logCalc();
