// declare id "class" into document.getElementById as btn
const btn = document.getElementById("calculate");
// declare id "bill-amount" into document.getElementById as billInput
const billInput = document.getElementById("bill-amount");
// declare id "tip-percentage" into document.getElementById as tipInput
const tipInput = document.getElementById("tip-percentage");
// declare id "total" into document.getElementById as totalSpan
const totalSpan = document.getElementById("total");

// create a function named calculateTotal
function calculateTotal() {
  // get the value from the bill input field
  // and store it inside billValue
  const billValue = billInput.value;
  // get the value from the tip percentage input field
  // and store it inside tipValue
  const tipValue = tipInput.value;
  // calculate the total bill with the tip included
  // formula:
  // original bill × (1 + tip percentage converted to decimal)
  const totalValue = billValue * (1 + tipValue / 100);
  // display the totalValue inside the element with id="total"
  // toFixed(2) keeps the number to 2 decimal places
  // example: 125 becomes 125.00
  totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);
