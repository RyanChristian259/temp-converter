// console.log("sanity check!");

// Temperature Convertor - Write code that asks the user for a temperature in Celsius and converts it to Fahrenheit. Bonus: ask the user first if they want to convert from F to C or C to F.

//////////////**Calculations show in console**/////////////////////

//prompt user if they want to convert C to F or F to C


var userInput = prompt("Do you want to convert from F to C (type the letter 'F') or C to F (type the letter 'C')?");
  if (userInput === "F" || userInput === "f"){
    console.log(farenheitToCelcius());
    // document.getElementById("fToC").innerHTML = farenheitToCelcius();
}
  else if(userInput === "C" || userInput === "c"){
    console.log(celciusToFarenheit());
    // document.getElementById("cToF").innerHTML = celciusToFarenheit();
}
  else{
     alert("Please enter only C or F");
}

// Function converts Celcius to Fahrenheit
function celciusToFarenheit(celciusInput){
  var celciusInput = prompt("please enter the starting temperature in Celcuis");
  if (isNaN(celciusInput) === true){
    (alert("please enter a number only"));
  }
  else{
    var tempConvertedToF = ((celciusInput * 1.8) + 32);
    return tempConvertedToF.toFixed(1);
  }
}


//Function convertsFarenheit to Celcius
function farenheitToCelcius(farenheitInput){
  var farenheitInput = prompt("please enter the starting temperature in Farenheit");
    if (isNaN(farenheitInput) === true){
    (alert("please enter a number only"));
  }
    else{
      var tempConvertedToC = ((farenheitInput - 32) / 1.8);
      return tempConvertedToC.toFixed(1);
  }
}








