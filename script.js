const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXVY";
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#&*-+";

const displayPassInput = document.getElementById("display-pass");
const copyTextBox = document.getElementById("copy-text");
const passLenInput = document.getElementById("pass-len");
const uppercaseInput = document.getElementById("upper-case");
const lowercaseInput = document.getElementById("lower-case");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const button = document.getElementById("btn");


const createPassword = (password = "") => {
  if(uppercaseInput.checked){
      password +=
        uppercaseAlphabet[Math.floor(Math.random() * uppercaseAlphabet.length)];
  }
  if(lowercaseInput.checked){
    password +=
      lowercaseAlphabet[Math.floor(Math.random() * lowercaseAlphabet.length)];
  }
  if(numbersInput.checked){
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if(symbolsInput.checked){
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  if (password.length <= Number(passLenInput.value)) {
    return createPassword(password);
  }
  displayPassInput.value = password.substring(0, passLenInput.value);
};

button.addEventListener("click", () => {
  if(uppercaseInput.checked || lowercaseInput.checked || numbersInput.checked || symbolsInput.checked){
    createPassword();
  }
});
copyTextBox.addEventListener("click", () => {
  displayPassInput.select();
  document.execCommand("copy");
});
