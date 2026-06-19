
function MIND(){

    let repuus = Number(document.getElementById("money").value);


    let repuus1 = repuus / 95;


    document.getElementById("result").innerText = "USA = $" + repuus1;

}

function DUSA(){

    let repuus = Number(document.getElementById("money").value);

    let repuus1 = repuus * 95;

    document.getElementById("result").innerText = "IND = ₹"+repuus1;
}