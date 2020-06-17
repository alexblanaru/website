321312; // Write JavaScript here
function calculatetax() {
  var salary = document.getElementById("income").value;

  var taxes = 0.6 * salary;

  var totalTax = document.getElementById("tax");
  totalTax.value = taxes;
}
