let inputBx = document.querySelector("#inputtext");
let text = document.querySelector("#text");
let bttn = document.getElementById("btn");

// add event to btn
bttn.onclick = function(){
    
    // get input value
    inputBx.value;
    // put input value in variable
    let inputValue =  inputBx.value;
    // put input value into p 
    text.innerHTML = inputValue;
    // make p vasiable
    text.style.display = "block";
    // empty input value to write again
    inputBx.value = " ";

}