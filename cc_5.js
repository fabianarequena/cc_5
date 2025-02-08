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


// Task 4: Price Adjustments

let prices = [1250, 1500, 2150];
let discountedPrices = prices.map(price => price * 0.9);

console.log("Discounted Prices:", discountedPrices);

// Taking off 10% of a given prive using the map function


// Task 5: Product Availability

let inventory = [8, 0, 16, 8, 0];
let availableInventory = inventory.filter(quantity => quantity > 0);

console.log("Available Inventory:", availableInventory);

// Filtering quaniities that are 0 or less to show what is in stock and what isn't


// Task 6: Revenue Calculation

let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce( (acc, sale) => acc + sale );

console.log("Total Revenue:", totalRevenue);

// Adding up sales to calculate total revenue using the reduce and accumulate fucntions


// Task 7: Customer Search

let customers = ["Lauren", "Sandy", "Bella", "Alex"];
let foundCustomer = customers.find(customer => customer === "Bella");

console.log("Found Customer:", foundCustomer);

// Given an array, I found a certian cutomer and gave output with find function


// Task 8: Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

console.log(`Tax: $${calculateTax(100, 0.07)}`);

// Calculated tax using a function and a template literal log
