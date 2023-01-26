// controller

//loanAmount, termAmount, interestRate
function getValues() {
    let loanAmount = document.getElementById('loanAmount').value;
    let termLength = document.getElementById('termAmount').value;
    let interestRate = document.getElementById('interestRate').value;

    let mathStuff = loanCalculation(loanAmount, termLength, interestRate);

    displayResults(mathStuff);
}

// logic function
function loanCalculation(loanAmount, termInput, interestInput) {
   let loanInput = parseFloat(loanAmount);
   let termLength = parseFloat(termInput);
   let interestRate = parseFloat(interestInput);




    let totalMonthlyPayment = (loanInput*(interestRate/1200))/(1-(1+interestRate/1200)**-termLength);
    let remainingBalance = loanInput;
    let interestPayment = remainingBalance * interestRate/1200;
    let principal = totalMonthlyPayment - interestPayment;
    let totalInterest = interestPayment;

    let monthlyPayments = [];


    for(let i = 0; i <= termLength; i++) {

        interestPayment = remainingBalance * interestRate/1200;
        principal = totalMonthlyPayment-interestPayment;
        totalInterest += interestPayment;
        remainingBalance -= principal;
        let monthlyPaymentData = {
            month: i,
            payment: totalMonthlyPayment,
            principal: principal,
            interest: interestPayment,
            totalInterest: totalInterest,
            balance: remainingBalance
        }
        monthlyPayments.push(monthlyPaymentData);
    } 
    
    return monthlyPayments;

}


    function displayResults(loanData) {
  //Show results
// top card results
let principalElementValue = document.getElementById("loanAmount").value;
let totalInterestElementValue = loanData[loanData.length - 1].totalInterest;


document.getElementById("MonthlyPaymentAmountDisplay").textContent = loanData[0].payment;

document.getElementById("principal").textContent = principalElementValue;

document.getElementById("totalInterestDisplay").textContent = totalInterestElementValue;

document.getElementById("totalCostDislay").textContent = (principalElementValue + totalInterestElementValue).toLocaleString();


//   table results
  document.getElementById("monthDisplay").innerHTML = "" + month;

  document.getElementById("monthlyPaymentDisplay").innerHTML = "$";

  document.getElementById("paymentAmountDisplay").innerHTML = "$";

  document.getElementById("totalInterest").innerHTML = "%";

  document.getElementById("totalPayment").innerHTML = "$";




}

