const Btn = document.querySelector('.btn1');
const Output = document.querySelector('.output');

function likeCounter(){
  console.log("click");
 
  var output= Output.innerText;
  output++;
  Output.innerHTML = output;
  Output.style.color= "green";
  
}




Btn.addEventListener("click", likeCounter);