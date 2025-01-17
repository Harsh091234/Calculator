function AddNoOnScreen(button){
    const screenElement= document.getElementById("display");
    
    const buttonValue = button.value;
    
    
   screenElement.value += buttonValue;
} 

function ClearScreen(){
    const screenElement= document.getElementById("display");
    screenElement.value = "";
}

function DeleteScreen(){
    const screenElement = document.getElementById("display");
    screenElement.value = screenElement.value.toString().slice(0,-1);
}

function Evaluate(){
    const screenElement = document.getElementById("display");
    screenElement.value = eval(screenElement.value);
}