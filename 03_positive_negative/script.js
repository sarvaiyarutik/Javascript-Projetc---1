

document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault();


let input_number = Number(document.getElementById("input_number").value)

let result = document.getElementById("result");

if(input_number> 0){

    result.textContent = "This Number is Positive"
}

else if (input_number < 0){
    result.textContent = "This Number is Negative"
}

else{
    result.textContent = "This Number is Zero";
}





});