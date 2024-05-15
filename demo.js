let cart  = [ 
    {item: "Bread", price: 3.29, quantity: 2}, 
    {item: "Milk", price: 4.09, quantity: 1}, 
    {item: "T-Bone Steak", price: 12.99, quantity: 2}, 
    {item: "Baking Potato", price: 1.89, quantity: 6}, 
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1}, 
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1}, 
    {item: "Apples", price: 0.66, quantity: 6} 
    ]; 

/*a. Write code that searches the courses array using the map () function to
return only the item name and then use forEach () to display the list of
items.*/
let itemNames = cart.map(cart => cart.item);
itemNames.forEach(item => console.log(item));

/* Using map() to get item names with regular function
let itemNames = cart.map(function(cart) {
    return cart.item;
});

// Using forEach() to display the list of items
itemNames.forEach(function(item) {
    console.log(item);
});*/


/*b. Write code that determines the total cost of everything in the cart using
reduce (). In the reducer function, remember to account for the
possibility of there being more than 1 unit (ex: 5 apples rather than 1)!*/
function getSum(currentTotal, item) {
 // adds the array value to the accumulated total
 return currentTotal + (item.price * item.quantity);
}
let sum = numbers.reduce(getSum, 0);
console.log(sum);


/*let totalCost = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
}, 0);

console.log("Total cost of the cart:", totalCost.toFixed(2));

/*c. Revisit your code for (a) above. Can you sort the list before you display it?*/

