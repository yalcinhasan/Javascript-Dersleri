//! DERS-7

//! *** Veri Turunu Ogrnmek ve Veri Turu Donusumleri ***

/* veri turunu ogrenmek typeof: */
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
    "Price: ",
    typeof(price)
);

console.log(
    "stringPrice: ",
    typeof(stringPrice)
);

console.log(
    "hasPassword: ",
    typeof(hasPassword)
);

/* string(metinsel) bilgileri int ve float'a donusturmek: */
let number1 = "11";
number1 = parseInt(number1);
console.log( "number1: ", parseInt(number1), typeof(number1));

let number2 = "hasan";
number2 = parseInt(number2);
console.log( "number2: ", parseInt(number2), typeof(number2));

let number3 = "11px";
number3 = parseInt(number3);
console.log( "number3: ", number3, typeof(number3));

let number4 = "11.4px";
number4 = parseFloat(number4);
console.log( "number4: ", parseFloat(number4), typeof(number4));


/* number veri tipinden string'e donusturmek: */
let number5 = 55 ;
number5 = number5.toString()
console.log(number5, typeof(number5))
