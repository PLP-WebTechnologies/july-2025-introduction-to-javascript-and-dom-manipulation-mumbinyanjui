// ===============================
// Part 1: JavaScript Basics
// ===============================

// Variables & Conditionals
let userName = prompt("Enter your name:");
if (userName) {
  document.getElementById("welcome").textContent = "Welcome, " + userName + "!";
} else {
  document.getElementById("welcome").textContent = "Welcome, Guest!";
}

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to display the total
function showTotal() {
  let total = calculateTotal(150, 3); // example: 150 * 3
  document.getElementById("total").textContent = "Total: $" + total;
}

// ===============================
// Part 3: Loops
// ===============================

function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old list

  // For loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// Toggle text on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
  let msg = document.getElementById("message");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});

// Dynamically add list items
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(newItem);
});
