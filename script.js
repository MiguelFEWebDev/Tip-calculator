// Bill & People amount labels value
const bill = document.getElementById("bill");
const peopleAmount = document.getElementById("peopleAmount");

// 0.00 divs that wil show the price
const totalAmount = document.getElementById("totalAmount");
const totalPerPerson = document.getElementById("totalPerPerson");

// Formula
let billPerPerson = bill.valueAsNumber / peopleAmount.valueAsNumber;

// Display in div
totalPerPerson.textContent = billPerPerson;

// Function for updating the total
function updateTotal() {
  //recalculating bill
  billPerPerson = bill.valueAsNumber / peopleAmount.valueAsNumber;
  totalPerPerson.textContent = billPerPerson;
}

// Sending the data on inputs
bill.addEventListener("input", updateTotal);
totalPerPerson.addEventListener("input", updateTotal);
