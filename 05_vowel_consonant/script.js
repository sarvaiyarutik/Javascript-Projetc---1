document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault();

let input_id = document.getElementById("input_id").value.toLowerCase();

let result = document.getElementById("result");

if(input_id === "a" || input_id === "e" || input_id === "i" || input_id === "o" || input_id=== "u"){

    result.innerText = "vowel";
}
else{
    result.innerText = "Consonant";
}
})