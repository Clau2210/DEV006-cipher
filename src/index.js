import cipher from './cipher.js';
const buttonencode=document.getElementById("button_encode");
buttonencode.addEventListener("click", ()=> {
  const messagencode =document.getElementById("message_encode").value;
  const offset=document.getElementById("position_encode").value;
  const result=cipher.encode(offset, messagencode);
  window.alert(result);
  return result;
});
const buttondecode=document.getElementById("button_decode");
buttondecode.addEventListener("click", ()=> {
  const messagedecode=document.getElementById("message_decode").value;
  const offset=document.getElementById("position_decode").value;
  const result2=cipher.decode(offset, messagedecode);
  window.alert(result2);
  return(result2);
});

