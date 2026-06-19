document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let input_id = Number(document.getElementById("input_id").value);

    let result = document.getElementById("result");

    if(input_id % 4 === 0){
        result.innerText = " is this Leap Year"
    }

    else{
        result.innerText = "is Not a Leap Year"
    }

})