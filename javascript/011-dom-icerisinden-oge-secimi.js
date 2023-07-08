//! DERS-11

// *** DOM İcerisinden Oge Secimi *** //

// Yardimci kaynaklar;
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/* Etiket adi ile secme. Genelde cok fazla kullanilmayan bir yapidir. */
// let h2 = document.getElementsByTagName('h2');
// console.log(h2); // Console de baktigin zaman title icerisinde ki ulasabileceginiz yapilari gorebileceksiniz.
// console.log(h2.title.innerHTML)


/* Id ile secim yapma. getElementById */
// let title = document.getElementById('title');
// console.log(title.innerHTML="deneme"); // innerHTML icerisine bilgi eklerseniz o bilgi hem console kısmında hem de sayfa icerisinde gorunecektir.

// let title = document.getElementById('title');
// title.innerHTML="Degisen bilgi";
// console.log(title.innerHTML); 

/* QuerySelector () yöntemi */
//QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. 
//Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir.
//Sayfada eşleşen ilk elemanı size döndürecektir. Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir. querySelector()

let link = document.querySelector("ul#list>li>a");
//link.innerHTML = "Link bilgisi degisti" // a elementinin içeriği degisir.
link.innerHTML += " degisti" // a elementinin içeriğine bu içerik eklenir.
// kullanacagimiz id 'nin onune '#' getirmek zorundayiz.

let link1 = document.querySelector("#frontend");
link1.innerHTML = "kısa yoldan querySelector"; // link 'e bir id verip öyle kullanmak daha kolay bir kullanım olacaktır.
link1.style.color = "red";
link1.classList.add('btn');


//! EKSTRA
/* Query Selector All
querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek 
yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir. */

