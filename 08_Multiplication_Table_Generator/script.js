document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let input_id = document.getElementById("input_id").value;

    let num = "";

    for(let i=1;i<=10;i++){

        num += input_id + "x" + i + "=" +(input_id  *i) + "<br>";

    }

   result.innerHTML = num;
})