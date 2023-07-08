//! DERS-18

// *** ternary operator ile short if kullanimi *** //

// eger kullaniciadin varsa yazdir yooksa kullanici bilginiz bulunamadi yaz

let userName = prompt("kullanıcı bilginizi yazınız");
let info = document.querySelector("#info");

//! tenary kullanimi:
//! kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bilginiz Bulunamadi"}`