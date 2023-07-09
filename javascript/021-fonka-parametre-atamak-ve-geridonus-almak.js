//! DERS-21 


/* https://www.w3schools.com/js/js_functions.asp  ==> KAYNAK */

// *** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak *** //

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


/* 1.Durum: Asagidaki yapı dısarıya bagımlı bir fonkdur. Fonkları mümkün oldukca disaridan bagimsiz yapmaz lazım */

let firstName ="lorem"; // bu satırı yorum satırı haline getirelim. hata verir

function greetings(firstName) { // firstName degiskenini parametre olarak tanımlarsak hata vermez ama undefined verir.
    console.log(`Merhaba ${firstName ? firstName : ""}`); // ternary op.(short-if) kullanalım
}
greetings();

/* 2.Durum: Asagidaki yapıda degiskenlerin veya paremetlerin alacagı degerler üzerinde bir calisma yapilmistir. Göründügü üzere son verilen degeri almaktadirlar  */
let firstName1 = "Lorem";

function greetings1(firstName1="", lastName="") { // firstName1 degiskenini parametre olarak tanımlarsak ve içine bos bir degre verirsek.
    console.log(`Merhaba ${firstName1} ${lastName}`); 
}
greetings1(firstName1); // Burada firstName1 'e deger verirsek son deger bu olacagindan çıktı burada verilen deger olur.
greetings1("parametre");


/* */

function greetings2(firstName,lastName) {
    let info = `Merhaba ${firstName} ${lastName}`;
    return info;
}
//let info = greetings2("ad","soyad"); // greetings2() fonkunda kullandigimiz info degiskenini fonkun disinda da kullanabiliriz. 
//Cunku; fonk icinde kullanilan degisken ismi sadece o fonkun icerisinde gecerli olup caliscaktir.

let greetingsInfo = greetings2("Ad","Soyad");
console.log(greetingsInfo);


/* */

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info;
}

let htmlInfo = `<span style = "color: red">Color RED</span>`; 

domIdWriteInfo('greeting', htmlInfo);
domIdWriteInfo('info',greetings2("Ad","Soyad") );

