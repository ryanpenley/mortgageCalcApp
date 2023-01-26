// controller

//loanAmount, termAmount, interestRate
function getValues() {
    let loanAmount = document.getElementById('loanAmount').value;
    let termLength = document.getElementById('termAmount').value;
    let interestRate = document.getElementById('InterestAmount').value;

    let mathStuff = loanCalculation(loanAmount, termLength, interestRate);

    displayResults(mathStuff);
}

// logic function
function loanCalculation(loanAmount, termLength, interestRate) {
   let loanAmount = parseInt(loanAmount);
   let term = parseInt(termLength);
   let interestRate = parseInt(interestRate);


    let totalMonthlyPayment = (loanAmount)*(interestRate/1200)/(1-(interestRate/1200)**(-termLength));


    let remainingBalance = loanAmount;
    let interestPayment = remainingBalance * interestRate/1200;
    let principal = totalMonthlyPayment - interestPayment


    for(let i = 0; i <= term; i++) {
        term = term[i];

        interestPayment = term * interestRate/1200;
        principal = totalMonthlyPayment - interestPayment;
        remainingBalance = remainingBalance - principal;
    } 

    return {
        interestPayment,
        principal,
        remainingBalance

    }

}


    function displayResults(mathStuff) {
  //Show results

  document.getElementById("MonthlyPaymentAmountDisplay").innerHTML = mathStuff.totalMonthlyPayment;

  document.getElementById("principal").innerHTML = mathStuff.loanAmount

  document.getElementById("totalInterestDisplay").innerHTML = mathStuff.interestPayment;

  document.getElementById("totalCostDisplay").innerHTML = mathStuff.totalCost;




}




















// test area end


function (userString) {
    let revString = '';

    for(let i = 0;  - 1; i >= 0; i = i - 1) {
        revString += userString[i];
    } if

    return revString;
}

// display function
function displayResults(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}