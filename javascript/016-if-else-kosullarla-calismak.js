//! DERS-16 

// *** kosullarla calismak (if-else) *** //

// kullanici bilgisi varsa ekrana yazdi
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")} // konusma dili bu sekilde olan yapının kodu;
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

let username = prompt("Kullanici adinizi giriniz: ")

if (username.length > 0) {  // if kısmı her zaman true ise calisir.
    console.log(`Kullanici bilginiz: ${username}`)
}
else {
    console.log("Bilgi yok!")
}