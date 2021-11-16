const Btn = document.querySelector('.btn1');
const Output = document.querySelector('.output');

function likeCounter(){
  console.log("click");
 
  Output.innerText++;
  
  
}




Btn.addEventListener("click", likeCounter);