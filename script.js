// Bill & People amount labels value
const peopleAmount = document.getElementById("peopleAmount").value;
const bill = document.getElementById("bill").value;

// 0.00 divs that wil show the price
const totalAmount = document.getElementById("totalAmount");
const totalPerPerson = document.getElementById("totalPerPerson");

// tip buttons
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");

// Final prices
const totalCostAmount = bill * peopleAmount + 10;
const totalCostPerson = bill * peopleAmount + 15;

// Display total price in empty div
