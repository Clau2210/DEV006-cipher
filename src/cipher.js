const cipher = {
  encode: function(offset,messagencode){
    if (typeof Number(offset) !== "number" || typeof messagencode !== "string"){
      throw new TypeError("Debes capturar números y letras.");
    }  
    let messagencode2="";
    for (let i=0; i<messagencode.length;i++){
      const letterCode=messagencode[i].charCodeAt();
      if (letterCode >= 91 && letterCode <= 126){
        window.alert('¡Sólo letras mayúsculas excepto Ñ !');
      } 
      else if(letterCode >= 65 && letterCode <= 90){
        messagencode2 += String.fromCharCode(((letterCode - 65 + Number(offset)) % 26) + 65);
      }  
    }
    return messagencode2;
  }, 
  decode: function(offset, messagedecode){
    if (typeof Number(offset) !== "number" || typeof messagedecode !== "string"){
      throw new TypeError("Debes capturar números y letras.");
    } 
    while (offset > 26){
      offset -= 26;
    }
    let messagedecode2="";
    for (let i=0; i<messagedecode.length;i++){
      const letterCode=messagedecode[i].charCodeAt();
      if (letterCode >=91 && letterCode <=126){
        window.alert('¡Sólo letras mayúsculas excepto Ñ!');
      }
      else if (letterCode >=65 && letterCode <=90){
        messagedecode2 += String.fromCharCode(((letterCode - 65 -Number(offset)+26) % 26) + 65);
      }
    }
    return messagedecode2;
  }
};
export default cipher;