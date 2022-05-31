let buttonInc = document.querySelector('#adicionar');
let buttonDec = document.querySelector("#subtrair");
let currentNumberWrapper = document.getElementById("currentNumber");
var count  = 0;

buttonInc.addEventListener ("click", () => {
  if (count >=10) {
    alert ("Você chegou no limeite do número positivo!")
  } else {
    count ++
    currentNumberWrapper.innerHTML = count
  }

  if (count > 0) {
    currentNumberWrapper.style.color = "Black";
  } 
})

buttonDec.addEventListener ("click", () => {
  if (count <= -10) {
    alert("Você chegou no limeite do número negativo!")
  } else {
    count --
    currentNumberWrapper.innerHTML = count
  }

  if (count < 0) {
    currentNumberWrapper.style.color = "red";
  } 
})

