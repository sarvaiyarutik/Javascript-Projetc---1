document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let input_id = document.getElementById("input_id").value;

    let prime = true;

    if(input_id <= 1){
        prime = false;
    }

    for(let i=2; i< input_id; i++){

        if(input_id % i === 0){
            prime = false;
        }
    }

    if(prime){
     result.innerText = "Prime Number";    
    }

    else{
        result.innerText = "not a prime number";
    }
})