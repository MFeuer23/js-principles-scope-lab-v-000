// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  var bestCustomer = `not ${customerName}`;
  return bestCustomer;
}