function demandSupply() {
    //This function looks to get the demand and supply, and determine whether the scenario is of equilibrium, surplus, shortage
    var output = document.getElementById("output");
    var demand = parseInt(prompt("What is the quantity demanded?")); //demand
    var supply = parseInt(prompt("What is the quantity supplied?")); //supply
    if (demand == supply) { //equilibrium case
        document.getElementById("result").innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!"; //Updating output
        output.innerHTML = "The quantity demanded & supplied is the same, so it's an equilibrium!"; //Printing output
    }
    else if (demand > supply) { //shortage case
        document.getElementById("result").innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!"; //Updating output
        output.innerHTML = "The quantity demanded is more than the quantity supplied, so it's a shortage!"; //Printing output
    }
    else if (demand < supply) { //surplus case
        document.getElementById("result").innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!"; //Updating output
        output.innerHTML = "The quantity demanded is less than the quantity supplied, so it's a surplus!"; //Printing output
    }
}

function exchangeRates() {
    //This function looks to help users determine the equivalent prices across exchange rates, helping them determine where is it better to buy from?
    var output = document.getElementById("output");
    var rate1 = parseFloat(prompt("What is the first exchange rate? This one will be the currency which comparisons would be made to.")); //Will compare with this currency
    var currency1 = prompt("What currency? This will be the one I will return in"); //
    var rate2 = parseFloat(prompt("What is the second exchange rate? This is the currency the price will be returned in")); //The currency to output with
    var currency2 = prompt("What currency? This will be the one I will compare to");
    var price = parseFloat(prompt("What is the price of the product? [in rate 1]")); //The price

    var priceResult = price * (rate2/rate1); //To get the equivalent price

    document.getElementById("result").innerHTML = "The equivalent price of the product, priced at " + price.toFixed(2) + " " + currency1 +  "would be " + priceResult.toFixed(2) + " " + currency2 + " (approximately)"; //Updating output
    output.innerHTML = "The equivalent price of the product, priced at " + price.toFixed(2) + " " + currency1 + "would be " + priceResult.toFixed(2) + " " + currency2 + " (approximately)"; //Printing output

}