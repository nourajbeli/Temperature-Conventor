input=document.getElementById("input");
tof=document.getElementById("tof");
toc=document.getElementById("toc");
result=document.getElementById("result");
let temp;
function convert(){
  
  if( tof.checked){
    temp=Number(input.value);
    temp=temp*9/5+32;
    result.textContent=  temp.toFixed(1) + "°";
  }else if (toc.checked){
    temp=Number(input.value);
    temp=(temp-32)*(5/9);
    result.textContent=  temp.toFixed(1) + "°C";
  }else {
    result.textContent=" Select a unit ";
  }
  
  }