//Create username, password and quantity variables
let username = "john_doe";
let password = "secret123";
let quantity = 5;
console.log(username + " - " + password + " - " + quantity);

//Create an object for an ERP user
let erpUser = {
    Username: username,
    Password: password,
    Quantity: quantity
};
console.log(erpUser);

//Create an array of 5 product names
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
console.log(products);

//Check whether received quantity matches expected quantity
if(quantity === 5){
    console.log("Quantity matches expected value.");
} else {
    console.log("Quantity does not match expected value.");
}

//Write if/else for login status
let loginStatus = true;
if(loginStatus){
    console.log("User is logged in.");
} else {
    console.log("User is not logged in.");
}

//Loop through 5 product IDs
for(let i = 1; i <= 5; i++){
    console.log("Product ID: " + i);
}

//Create a login function
function login(user, pass){

    if(user === username && pass === password){
        console.log("Login successful.");
    } else {
        console.log("Login failed.");
    }       
}
    login("john_doe", "secret123");

    //Create a reusable product search function
function searchProduct(productName){
    if(products.includes(productName)){
        console.log(productName + " is available.");
    } else {
        console.log(productName + " is not available.");
    }
}
searchProduct("iphone");

//Create an arrow function to calculate tax
let calculateTax = (price, rate) => {
    return price * rate;
};
let total = calculateTax(100, 0.1)
let gst = total * 0.18
console.log("Total tax: " + total);
console.log("GST: " + gst);