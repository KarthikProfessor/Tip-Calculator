function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const services = Number(document.getElementById("service").value);
  const people = Number(document.getElementById("people").value);
  
  if (bill <= 0) {
    alert("Please Enter a valid number");
    return;
  }


  let tipAmount = bill * services;
  let totalAmount = tipAmount + bill;
  let splitPerPerson = totalAmount / people;
  let tipPerPerson = tipAmount / people;

  document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
  document.getElementById("perPerson").textContent = `$${splitPerPerson.toFixed(2)}`;
  document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
}

document.getElementById("calculateBtn").addEventListener("click", calculateTip)

// Calculate base on input change
const allEls = document.querySelectorAll("input, select").forEach((element) => {
  element.addEventListener("input", calculateTip);
})