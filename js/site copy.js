// controller

//loanAmount, termAmount, interestRate
function getValues() {
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let termLength = parseInt(document.getElementById('termAmount').value);
    let interestRate = parseFloast(document.getElementById('InterestAmount').value);

    let loanPayments = loanCalculation(loanAmount, termLength, interestRate);

    if (Number.isInteger(loanAmount) && Number.isInteger(term) && Number.isInteger(rate))

    displayResults(mathStuff);
}

// logic function
function loanCalculation(loanAmount, termLength, interestRate) {
    let totalMonthlyPayment = (loanAmount)*(interestRate/1200)/(1-(interestRate/1200)**(-termLength));
   

    let remainingBalance = loanAmount
   let termLength = 0;
   let totalInterest = 0;
   let principalPayment = 0;

   let loanPayments = [];

    for(let month = 1; month <= termInput; month++) {

        interestPayment = month * (interestRate/1200);
        totalInterest += interestPayment;
        principalPayment = totalMonthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        let payment = {
            month: month,
            totalMonthlyPayment: totalMonthlyPayment,
            interestPayment: interestPayment,
            totalInterest: totalInterest,
            principalPayment: principalPayment,
            remainingBalance: remainingBalance
        };

        loanPayments.push(payment);
    } 

    return loanPayments;

}


    function displayResults(mathStuff) {
  //Show results

let tableBody = document.getElementById('paymentTableBody');
const tableRowTemplate = document.getElementById('paymentTableTemplate');


let tableRow = document.importNode(tableRowTemplate.content, true);

let tableCells = tableRow.querySelectorAll('td');


tableCells[0].textContent = payment.month;
tableCells[0].textContent = payment.totalMonthlyPayment;
tableCells[0].textContent = payment.interestPayment;
tableCells[0].textContent = payment.totalInterest;
tableCells[0].textContent = Math.abs(payment.remainingBalance);

tableBody.appendChild(tableRow);

let totalInterest = totalMonthlyPayments[totalMonthlyPayments.length - 1].totalInterest;

let totalCost = totalInterest + principal; 

let monthlyPayment = monthlyPayments[0].monthlyPayment;

  document.getElementById("monthDisplay").innerHTML = "" + month;

  document.getElementById("monthlyPaymentDisplay").innerHTML = "$";

  document.getElementById("paymentAmountDisplay").innerHTML = "$";

  document.getElementById("totalInterest").innerHTML = "%";

  document.getElementById("totalPayment").innerHTML = "$";




}




function formatAsCurrency(value) {
    return Number(valu).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}


// javascript.info
// mdn javascript












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