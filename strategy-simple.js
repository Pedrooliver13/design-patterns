const createKeyboardListener = () => {
  let states = {
    observers: [],
  };

  const subscribe = (observerFunction) => {
    states.observers.push(observerFunction);
  };

  const notifyAll = (command) => {
    console.log(`Notification ${states.observers.length} Observer(s)`);

    states.observers.forEach((observerFunction) => observerFunction(command));
  };

  const handleKeydownListener = (event) => {
    const keyPressed = event.key;
    notifyAll(keyPressed);
  };

  document.addEventListener("keydown", handleKeydownListener);

  return { states, subscribe };
};

const createGame = () => {
  logKeyPressed = (command) => {
    return console.log(`Key Pressed: ${command}`);
  };

  return { logKeyPressed };
};

const game = createGame();
const keyboardListener = createKeyboardListener();

keyboardListener.subscribe(game.logKeyPressed);
console.log("keyboardListener.states", keyboardListener.states);






const createPerson = (name, lastName) => {
  const fullName = () => `${name} ${lastName}`;
  
  return { name, lastName, fullName };
}

console.log(`Person: ${createPerson("José", "Silva").fullName()}`);
