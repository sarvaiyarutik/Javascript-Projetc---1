document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();


    let num = document.getElementById("num").value;
    
    let fact = 1;

    for(let i=1; i<=num;i++){
        fact = fact * i;
    }

    result.innerText ="Factorial = " + fact;
})