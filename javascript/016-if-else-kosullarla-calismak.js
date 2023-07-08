//! DERS-16 

// *** kosullarla calismak (if-else) *** //

// kullanici bilgisi varsa ekrana yazdi
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")} // konusma dili bu sekilde olan yapının kodu;
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// let username = prompt("Kullanici adinizi giriniz: ")

// if (username.length > 0) {  // if kısmı her zaman true ise calisir.
//     console.log(`Kullanici bilginiz: ${username}`)
// }
// else {
//     console.log("Bilgi yok!")
// }


//! Ekstra Ornekler 
// Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

var randomSayi = Math.floor(Math.random() * 10);
// Girdigimiz sayıyı aklında tutması icin promt degiskene atanır.
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin !!!");
else if (tahmin == "") alert("Tahmin yapmadınız!");
else if (tahmin == null) alert("Tahmin yapmaktan vazgeçtiniz");
else {
    alert("Bir daha dene :( , Random sayi: " + randomSayi);
}