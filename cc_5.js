// Task 1: Customer Profile

let customer = {
    name: "Sophia Kirschner",
    age: 21,
    email: "bophia@umiami.edu"
};
// Declared a customer 

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Logged using template literals


// Task 2: Order Details

let order = {
    orderId: 007,
    totalAmount: 275,
    status: "Shipment in Process",
    displayOrder: function () {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
// Declared order details with this function


order.displayOrder();

// Display details provided


// Task 3: Shopping Cart

let cartItems = ["Lip Liner", "Lip Tint", "Lip Gloss"];

cartItems.push("Lip Creme");
cartItems.pop();
cartItems.unshift("Lip Stick");
cartItems.shift();

console.log("Items in Cart:", cartItems);

// Here we defined items in a shopping cart, then added an item and removed it with push/pop and unshift/shift

