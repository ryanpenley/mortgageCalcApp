// controller

//loanAmount, termAmount, interestRate
function getValues() {
  let loanAmount = parseFloat(document.getElementById('loanAmount').value);
  let termLength = parseInt(document.getElementById('termAmount').value);
  let interestRate = parseFloat(document.getElementById('interestRate').value);

  loanCalculation(loanAmount, termLength, interestRate);

  // displayResults(mathStuff);
}

// logic function
function loanCalculation(loanAmount, termInput, interestInput) {
  let loanInput = loanAmount;
  let termLength = termInput;
  let interestRate = interestInput;




  let totalMonthlyPayment = (loanInput * (interestRate / 1200)) / (1 - (1 + interestRate / 1200) ** -termLength);
  let remainingBalance = loanInput;
  let interestPayment = remainingBalance * interestRate / 1200;
  let principal = totalMonthlyPayment - interestPayment;
  let totalInterest = interestPayment;

  let monthlyPayments = [];


  for (let i = 0; i <= termLength; i++) {

    interestPayment = remainingBalance * (interestRate / 1200);
    principal = totalMonthlyPayment - interestPayment;
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

  return displayResults(monthlyPayments);

}


function displayResults(loanPayments) {
  //Show results
  // top card results
  let principalElementValue = Number(document.getElementById("loanAmount").value);
  let totalInterestElementValue = loanPayments[loanPayments.length - 1].totalInterest;
  let totalCostValue = Number(principalElementValue + totalInterestElementValue);



  // amort table
  let tableBody = document.getElementById('loanTableBody');
  const tableRowTemplate = document.getElementById('mortgageTableRowTemplate');


  for (let i = 0; i < loanPayments.length - 1; i++) {

    let eventRow = document.importNode(tableRowTemplate.content, true);
    let tableCells = eventRow.querySelectorAll('td');



    // month
    tableCells[0].innerHTML = i + 1;

    // payment
    tableCells[1].innerHTML = formatCurrency(loanPayments[i].payment);

    // principal
    tableCells[2].innerHTML = formatCurrency(loanPayments[i].principal);

    // interest
    tableCells[3].innerHTML = formatCurrency(loanPayments[i].interest);

    // total interest
    tableCells[4].innerHTML = formatCurrency(loanPayments[i].totalInterest);

    // balance
    // use math.abs to show absolute value of amount instead of negative number
    tableCells[5].innerHTML = formatCurrency(Math.abs(loanPayments[i].balance));

    tableBody.appendChild(eventRow);
  }

  // let totalInterest = loanPayments[loanPayments.length - 1].totalInterest;
  // let totalCost = totalInterest + principal;
  // let monthlyPayment = loanPayments[0].monthlyPayment

  document.getElementById("MonthlyPaymentAmountDisplay").textContent = formatCurrency(loanPayments[0].payment);

  document.getElementById("principal").textContent = formatCurrency(principalElementValue);

  document.getElementById("totalInterestDisplay").textContent = formatCurrency(totalInterestElementValue);

  document.getElementById("totalCostDisplay").textContent = formatCurrency(totalCostValue);





  function formatCurrency(value) {
    return Number(value).toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD'
    });
  }






  // //   table results
  //   document.getElementById("monthDisplay").innerHTML = "" + month;

  //   document.getElementById("monthlyPaymentDisplay").innerHTML = "$";

  //   document.getElementById("paymentAmountDisplay").innerHTML = "$";

  //   document.getElementById("totalInterest").innerHTML = "%";

  //   document.getElementById("totalPayment").innerHTML = "$";




}

