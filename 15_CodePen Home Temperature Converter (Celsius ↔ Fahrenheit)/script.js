

function FFahrenheit(){

    let cel = Number(document.getElementById("input_id").value);

    let result = document.getElementById("result");


    let Far = (cel*9/5)+32;

    result.innerText = cel+"C ="+Far+"f";
}


// function CCelsius(){

//     let Far = Number(document.getElementById("input_id").value);

//     let result = document.getElementById("result");

//     let cel = (Far - 32) * 5/9

//     result.innerText = Far + "F = "+cel +"C";
// }

