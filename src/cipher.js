const cipher = {
  encode: ()=>{
    const messagencode =document.getElementById("message_encode").value;
    let messagencode2="";
    
    for (let i=0; i<messagencode.length;i++){
      const letterCode=messagencode[i].charCodeAt();
      const offset=document.getElementById("position_encode").value;
     
      if (letterCode >= 91 && letterCode <= 126){
        window.alert('¡Sólo letras mayúsculas excepto Ñ !');
      
          
      } 
      else if(letterCode >= 65 && letterCode <= 90){
       messagencode2 += String.fromCharCode((letterCode - 65 + Number(offset) % 26) + 65);
        
    
      } 
  
   
    }
        console.log(messagencode2);    
    alert(messagencode2);
  }, 
  decode:()=> {
    const messagedecode=document.getElementById("message_decode").value;
    let messagedecode2="";
    for (let i=0; i<messagedecode.length;i++){
      const letterCode=messagedecode[i].charCodeAt();
      const offset=document.getElementById("position_decode").value;
      if (letterCode >=91 && letterCode <=126){
        window.alert('¡Sólo letras mayúsculas excepto Ñ!');
      }
      else if (letterCode >=65 && letterCode <=90){
        messagedecode2 += String.fromCharCode((letterCode - 65 -Number(offset) % 26) + 65);
      }
    }
    console.log(messagedecode2);     
    alert(messagedecode2);
  
}
};

export default cipher;