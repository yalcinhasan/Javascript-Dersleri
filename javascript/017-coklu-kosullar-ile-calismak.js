//! DERS-17

// *** Coklu kosullar ile calismak *** //


let userName = prompt("Kullanıcı adınız: ");
let age = prompt("Yasiniz");
let info = document.querySelector("#info");

if (userName && age >= 18) {
    //console.log("Ehliyet alabilirsiniz");
    info.innerHTML = "Ehliyet alabilirsiniz";
} else if (!userName) {
    //console.log("Kullanici adiniz yok!")
    info.innerHTML = "Kullanici adiniz yok!";
} else if (!(age >= 18)){
    //console.log("Yas bilginiz yok veya 18 yasindan kucuksunuz")
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
}