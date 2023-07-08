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

//! Ekstra Ornekler
// Switch yapısı belirli bir değere göre hangi kodun çalıştırılacağını yönetmek için kullanılır. 
// Case tanımlamalarından sonra çalışmasını istediğimiz deyimleri belirtebiliriz. 

let hava = "Yagmurlu";
switch(hava) {
case "Yagmurlu":
    console.log("Semsiyeni yanina almayi unutma");
    break;
case "Gunesli":
    console.log("Hafif giyin");
case "Bulutlu":
    console.log("Disari cik");
    break;
case "Karlı":
    console.log("Kalin giyin");
    break;
case "Firtinali":
    console.log("Bir süre disari cikma");
    break;
default:
    console.log("Bilinmeyen hava durumu:" , hava);
}