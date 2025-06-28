function demandSupply() {
    //This function looks to get the demand and supply, and determine whether the scenario is of equilibrium, surplus, shortage
    var output = document.getElementById("output");
    var demand = parseInt(prompt("What is the quantity demanded?")); //demand
    var supply = parseInt(prompt("What is the quantity supplied?")); //supply
    if (demand == supply) { //equilibrium case
        document.getElementById("result").innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!";
        output.innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!";
    }
    else if (demand > supply) { //shortage case
        document.getElementById("result").innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!";
        output.innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!";
    }
    else if (demand < supply) { //surplus case
        document.getElementById("result").innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!";
        output.innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!";
    }
}

function exchangeRates() {
    //This function looks to help users determine the equivalent prices across exchange rates, helping them determine where is it better to buy from?
    var output = document.getElementById("output");
    var rate1 = parseFloat(prompt("What is the first exchange rate? This one will be the currency in which you are trying to get the price of your said product.")); //Will output the final price in this currency
    var rate2 = parseFloat(prompt("What is the second exchange rate? This is the currency which you are comparing it to.")); //The currency to compare with
    var price = parseFloat(prompt("What is the price of the product? [in rate 1]")); //The price
}