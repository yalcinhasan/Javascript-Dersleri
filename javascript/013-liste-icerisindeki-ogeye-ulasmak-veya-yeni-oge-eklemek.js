//! DERS-13

// *** liste icerisindeki ogeye ulasmak veye yeni oge eklemek *** //

// ogeye ulasma
let lastChild = document.querySelector("ul#list>li:last-child");
console.log(lastChild);

// oge degistirme 
let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "ilk oge degistirildi";

// append() ve prepend() ile listeye oge ekleme
let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement('li');

liDOM.innerHTML = "prepend() ile listenin başına, append() ile listenin sonuna oge eklenir. "; 

// ulDOM.append(liDOM);// append() ile listenin sonuna eleman eklenir 
ulDOM.prepend(liDOM); // prepend() ile listenin basina eleman eklenir