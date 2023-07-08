//! DERS-9

// *** String Veri Turu İslemleri *** //

let email = "hasanyalcin@gmail.com";
let firstName = "hasan";
let lastName = "YALCIN";

// string karakter sayisi -> length
console.log(email.length)

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase(); // Büyük harfe cevirmek icin "toUpperCase()" kullanılır.
console.log(firstName);

lastName = lastName.toLowerCase(); // Büyük harfe cevirmek icin "toLowerCase()" kullanılır.
console.log(lastName);

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@")); // email degiskeni icinde '@' isaretinin index bilgisini verir.
console.log(email[15]); // email degiskeninin 15. indeksini verir.

console.log(email.search("olmayan")); // -1, console de bunu yazarsan, yani olmayan bir metinsel ifadeyi aratırsan -1 donecektir.

// belli bir yere kadar al -> slice :  
console.log(email.slice(0,10)); // ilk indeksten 10. indekse kadar olan degerler dizinini yazdırır.

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@")); // '@' harfinden sonrasını alır.
console.log(DOMAIN);
console.log(DOMAIN.indexOf('.')); // domainden sonra '.' ifadesi kacinci indexte bulunur onu gösterir.
// Ayrıca indexOf() methodu: Regular Expressions işlemlerinde çok kullanılan metin içinde arama metottur.

console.log(DOMAIN.slice(0,DOMAIN.indexOf('.'))); // Domain bilgisinin kaçıncı indexte bilmediğimizi varsayarsak. Bu yapı bize domainin basladigi yerden '.(nokta)' nın oldugu yere kadar ki kısmın bilgisini verecektir.

// bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'outlook.com'); // domain bilgisini degistiriyoruz.
console.log(email);

// istedigim bilgi var mi ? -> includes :
console.log(email.includes('@'));
console.log(email.includes('olmayan')); // .search() ile yapınca -1 donuyordu, .includes() ile olmayan bir degeri istersek false donecektir.


// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith('outlook.com')); // true donecektir. Bu domain ile mi bitmiş.
console.log(email.endsWith('@')); // false dönecektir.

console.log(email.startsWith('hasanyalcin')); // true donecektir.
console.log(email.startsWith('.com')); // false donecektir.


// Ilk Harflerini Buyuk Yapmak
firstName = "firstname";
lastName = "lastname";

let fullName = `${firstName[0].toUpperCase()}${firstName.toLowerCase()}`; // sadece boyle yazıp bırakırsak; string ifadenin en basındaki harften bir tane de büyük harf ekleyerek çıktı veriri yani boyle --> 'Ffirstname'
console.log(fullName);

let fullName2 = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`; // fakat .slice(1) methodunu kullanırsak ilk harfi büyütüp çıktı vercektir. --> 'Firstname Lastname' 
console.log(fullName2);

/* Ekstra Bilgiler */
// Index numarası ile belirtilen karakterin Unicode değerini veren metot; charCodeAt() metodudur.
// Regular Expressions işlemlerinde çok kullanılan metin içinde arama metodu; indexOf() metodudur.