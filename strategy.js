const createCircuit = (strategy) => {
  // recomendo que os metodos do strategy esteja em outro módulo.
  const bikeCircuit = () => console.log("Bike Circuit Funciona");
  const carCircuit = () => console.log("Car Circuit Funciona");

  const circuitStrategy = {
    Bike: bikeCircuit,
    Car: carCircuit,
  };

  const getCircuit = () => {
    const circuitFunction = circuitStrategy[strategy];

    if (!circuitFunction) return console.log("Circuito não encontrado");

    return circuitFunction();
  };

  return { circuitStrategy, getCircuit };
};

const circuitBike = createCircuit("Bike");
const circuitCar = createCircuit("Car");
const circuitUnknow = createCircuit("Unknow");

circuitBike.getCircuit();
circuitCar.getCircuit();
circuitUnknow.getCircuit();
