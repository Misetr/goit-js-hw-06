const controlElem = document.querySelector("#font-size-control");
const textToIncrement = document.querySelector("#text");

const onInputChange = () => {
    textToIncrement.style.fontSize = `${controlElem.value}px`;
  };

  controlElem.addEventListener("input", onInputChange);