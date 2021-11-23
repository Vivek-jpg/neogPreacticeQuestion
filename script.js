const INput = document.querySelector('.input-name');
const Button1 = document.querySelector('.btn1');
const Button2 = document.querySelector('.btn2');
const Button3 = document.querySelector('.btn3');
const Button4 = document.querySelector('.btn4');
const Output = document.querySelector('.output');
Button1.addEventListener('click',changecolor);
Button2.addEventListener('click',changecolor1);
Button3.addEventListener('click',changecolor2);
Button4.addEventListener('click',changecolor3);

function changecolor(){
  console.log("yes");
  var firstNmae = INput.value;
  Output.style.color = "green";
  Output.innerText = firstNmae;
  

}
function changecolor1(){
   console.log("yes");
    var firstNmae = INput.value;
  Output.style.color = "red";
  Output.innerText = firstNmae;
}
function changecolor2(){
   console.log("yes");
    var firstNmae = INput.value;
  Output.style.color = "gray";
  Output.innerText = firstNmae;
  
}
function changecolor3(){
   console.log("yes");
    var firstNmae = INput.value;
  Output.style.color = "blue";
  Output.innerText = firstNmae;
}