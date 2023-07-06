//!DERS-15

// *** Karsilastirma ve Mantiksal Operatorler *** //

let price = "100";
let user = "hasan"
// == eşit ise
console.log("== :",price == 1); // false donecektir
console.log("== :",price == 100); // true. string olmasına ragmen true donecektir. 

// === hem degeri hem türü eşit ise
console.log("=== :",price === 1); // false donecektir. Bu operator, hem türe hem de degere bakar
console.log("=== :",price === 100); // true donecektir

/*  != eşit degilse */
console.log("!= :",price != 1); // true donecektir
console.log("!= :",price != 100); // false donecekir

// < küçükse
console.log("price < 101", price < 101); // True donecektir.
console.log("price < 99", price < 99); // false donecektir. 

// <= küçük veya eşitse
console.log("price <= 101", price <= 101); // false
console.log("price <= 100", price <= 100); // true
console.log("price <= 99", price <= 99); // true

// > büyükse
console.log("price > 101", price > 101); // False donecektir.
console.log("price > 99", price > 99); // True donecektir. 

// >= büyük veya eşitse
console.log("price >= 101", price >= 101); // false
console.log("price >= 100", price >= 100); // true
console.log("price >= 99", price >= 99); // true

// && ve
console.log("price > 0 && user != guest ",price > 0 && user != "guest"); // true donecektir. Dikkat != diyor. 1 ve 1 = 1
console.log("price > 0 && user != hasan ",price > 0 && user != "hasan"); // false donecektir. Dikkat =! diyor. 1 ve 0 = 0

// || veya
console.log("price > 0 || user != guest ",price > 0 || user != "guest"); // true donecektir. Dikkat != diyor. 1 veya 1 = 1
console.log("price > 0 && user != hasan ",price > 0 || user != "guest"); // true donecektir. Dikkat != diyor. 1 veya 0 = 1

/* ! degil(tersi) */
user = "guest";
price = 1;

console.log("price > 0 && !user == guest ",price > 0 && !user == "guest");
