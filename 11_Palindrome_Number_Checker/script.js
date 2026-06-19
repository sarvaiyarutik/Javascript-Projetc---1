document.getElementById("form").addEventListener("submit",(e)=>{


    e.preventDefault();

    let input_id = document.getElementById("input_id").value;
  
    let palindrome = "";

    for(let i=input_id.length - 1;i>=0;i--){
        palindrome+=input_id[i];
    }

    if(input_id === palindrome){

        result.innerText =  "Palindrome Number";
    }

    else{
        result.innerText = "Not a palindrome Number"
    }
})