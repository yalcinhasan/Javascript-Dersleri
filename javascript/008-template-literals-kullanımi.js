//! DERS-8

//! Template Literals Kullanımi
/* Template Literals (önceki adıyla Template Strings), kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir. */

let username= "hasan"
const DOMAIN = "kodluyoruz.org"
let email = username +"@" + DOMAIN;
console.log("Merhaba" ,username, "sitemize hoşgeldin", "mail adresin:", email);

let info = `Merhaba ${username} sitemize hosgeldin. Mail adresin: ${email} . 
kısa isminiz: ${username[0]}
Mail adersinin uzunlugu: ${email.length} karakter.
Borcunuz: ${(2+3)*10} TL.
Günün saat bilgisi: ${new Date().getHours}` // Backtick işareti klavyeden; Windows için --> AltGr + virgül(tuşları ile yapılır.) Mac için--> option + , 
console.log(info)

/*Çok Satırlı Dize Yazımı */
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`;
console.log("eski: ",eskiString);
console.log("yeni: ",yeniString);

/* İnterpolasyon: metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.*/
let ad= `Hasan`;
let soyad= `Yalçın`;

//Eski kullanım
console.log( "eski: ","Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log("yeni: ",`Benim adım ${ad} ${soyad}`);

let a = 10;
let b= 100;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);
