function demandSupply() {
    var output = document.getElementById("output");
    var demand = parseInt(prompt("What is the quantity demanded?"));
    var supply = parseInt(prompt("What is the quantity supplied?"));
    if (demand == supply) {
        document.getElementById("result").innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!";
        output.innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!";
    }
    else if (demand > supply) {
        document.getElementById("result").innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!";
        output.innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!";
    }
    else if (demand < supply) {
        document.getElementById("result").innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!";
        output.innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!";
    }
}

function exchangeRates() {
    var output = document.getElementById("output");
}