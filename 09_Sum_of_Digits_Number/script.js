document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault();

    let input_id = document.getElementById("input_id").value;

    let num = 0;

    for(let i=0;i<input_id.length;i++){
        num+=Number(input_id[i]);
    }

    result.innerText = "Sum = " +num;
})