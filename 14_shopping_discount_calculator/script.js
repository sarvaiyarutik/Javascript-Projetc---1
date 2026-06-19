document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();


    let input_id =Number(document.getElementById("input_id").value);

    let result = document.getElementById("result");


    let dis = 0;

    if(input_id >= 10000){

        dis =  input_id * 20/100;
    }

    else if (input_id >= 5000){
        dis = input_id *10/100;
    }

    else{
        dis = 0;
    }

    let totalBIll = input_id - dis;


    result.innerHTML  = "Discount  = ₹ "+dis+"<br>"+"total amount = ₹ "+totalBIll; 
})