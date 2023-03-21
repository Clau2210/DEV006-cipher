import cipher from './cipher.js';

console.log(cipher);

const buttonencode=document.getElementById("button_encode");
buttonencode.addEventListener("click", (encode)=> {
  console.log(cipher.encode());
});

const buttondecode=document.getElementById("button_decode");
buttondecode.addEventListener("click", (decode)=> {
  console.log(cipher.decode());
});

