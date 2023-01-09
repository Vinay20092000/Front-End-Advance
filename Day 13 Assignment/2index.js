const prodModule = require("./product-module");
console.log("All Products.")
let productArray= prodModule.allProducts();
for (let item of productArray)
{
    str=`Product ID : ${item.id}, Name : ${item.name}, Category : ${item.category}, Price : ${item.price}, Quantity : ${item.qty}`;
    console.log(str);
}

console.log("\nProducts in Searched Category.");
let categoryArray=prodModule.category("Gas");
for (item of categoryArray)
{
    str=`Product ID : ${item.id}, Name : ${item.name}, Category : ${item.category}, Price : ${item.price}, Quantity : ${item.qty}`;
    console.log(str);
}

console.log("\nProducts in Range.");
let rangeArray=prodModule.range(100,200);
for (item of rangeArray)
{
    str=`Product ID : ${item.id}, Name : ${item.name}, Category : ${item.category}, Price : ${item.price}, Quantity : ${item.qty}`;
    console.log(str);
}

console.log("\nProducts Out of Stock.");
let outOfStockArray=prodModule.outOfStock();
for (item of outOfStockArray)
{
    str=`Product ID : ${item.id}, Name : ${item.name}, Category : ${item.category}, Price : ${item.price}, Quantity : ${item.qty}`;
    console.log(str);
}

console.log("\nProducts In Stock.");
let inStockArray=prodModule.inStock();
for (item of inStockArray)
{
    str=`Product ID : ${item.id}, Name : ${item.name}, Category : ${item.category}, Price : ${item.price}, Quantity : ${item.qty}`;
    console.log(str);
}

