//! DERS-6

//! *** boolean veri tipi ***

/* 0 ve 1 'i Anlamak */
let isActive = false // 0 demek
isActive = true // 1 demek
console.log(isActive); // son deger true oldugunden true donecektir.

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); // false donecektir cunku; her hangi bir deger tanimlanmamistir.

//! İçinde değer barındıran tüm ifadeler true'tur.
Boolean("21"); // true donecektir. (console penceresinde yaz)
Boolean("0") // true donecektir. (console penceresinde yaz)
//! İçinde değer barındırmayan tüm ifadeler false 'tur.
Boolean("") // false donecektir. Cunku; degisken icerisinde bilgi/deger yoktur. (console penceresinde yaz)

userName= "user";
console.log("User name var mi?: ",Boolean(userName));

/* 0, -0, null, false, NaN, undefined, ("") */
//! İçinde değer barındırmayan tüm ifadeler false 'tur.
Boolean(0) // false donecektir.  (console penceresinde yaz)
Boolean(-0) // false donecektir.  (console penceresinde yaz)
Boolean(-0.1) // true donecektir.  (console penceresinde yaz)
Boolean(0===0) // True donecektir. (console penceresinde yaz)

/*Not: Karar Yapilari ksiminda tekrar anlatilacaktir */
userName = "user";
Boolean(userName.length > 0 ); // True donecektir. (console penceresinde yaz)

/* Ekstra Ornekler */
console.log(Boolean(1n)); // True (console penceresinde yaz)
console.log(Boolean(-1n)); // True (console penceresinde yaz)
console.log(Boolean(Infinity)); // True (console penceresinde yaz)
console.log(Boolean({})); // True (console penceresinde yaz)
console.log(Boolean(Symbol())); // True (console penceresinde yaz)