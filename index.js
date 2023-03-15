// Write your solution in this file!
// declare customerName to be bob in global scope
var customerName = "bob";

// modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// overwrites the best customer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// declare a constant called leastFavoriteCustomer in global scope
const leastFavoriteCustomer = "somebody";

// unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "nobody";
}
