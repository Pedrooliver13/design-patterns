const validatePassword = (password) => {
  const listMessages = [];

  const subscribeMessages = (message) => {
    listMessages.push(message);
  };

  const verifyLength = (min = 8, max = 15) => {
    const passwordLength = password.length;
    const isValid = passwordLength >= min && passwordLength <= max;

    if (!isValid) {
      subscribeMessages(`Possuir entre ${min} e ${max}`);
    }

    return isValid;
  };

  const verifyUpperCase = () => {
    const upperCaseRex = /[A-Z]/g;
    const hasUpperCase = password.match(upperCaseRex) || false;

    if (!hasUpperCase) {
      subscribeMessages("Possuir Letra maiúscula!");
    }

    return hasUpperCase;
  };

  const verifyAll = () => {
    const isInvalid = [verifyLength(), verifyUpperCase()].includes(false);

    if (!isInvalid) subscribeMessages("Tudo certo!");

    showMessages();
  };

  showMessages = () => {
    listMessages.forEach((message) => console.log(message));
  };

  return { verifyLength, verifyUpperCase, verifyAll };
};

const valid = validatePassword("pedro567").verifyAll();
