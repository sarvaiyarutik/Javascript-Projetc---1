

document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();


    let age = Number(document.getElementById("age").value);

    let result = document.getElementById("result");

    let price;

    if(age < 12){

        price = 100;
    }

    else if(age < 18){
        price = 150;
    }

    else if(age < 60){

        price = 200;
    }

    else{

        price = 250;
    }


    result.innerText = "TIcket Price = ₹" + price;

})

