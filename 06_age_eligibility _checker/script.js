document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let input_id = Number(document.getElementById("input_id").value);

    let result  = document.getElementById("result");

    if(input_id >= 60 ){
        result.innerText = "senior"
    }
    else if(18 <= input_id){
        result.innerText = "Eligible to vote & drive"
    }
    else{
        result.innerText= "not eligible"
    }

});