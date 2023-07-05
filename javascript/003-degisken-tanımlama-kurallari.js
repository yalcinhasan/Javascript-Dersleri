//! DERS-3 


// ### Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:
let fulname =""; // Bu degil :)
let kodluyoruzserverinfo = ""; // Bu da degil :)
let kodluyoruz_server_info =""; // bu da değil :)
let fullName = ""; // !Bu dogru kullanim :D

//UPPER_CASE Kullanimi:
const password = "11"; // Bu dogru degil :)
const PASSWORD = "11"; // !Bu dogru kullanım :D Çünkü; Degistirilmeyecek bir deger kullanılacaksa yani const degiskeni kullanılacaksa 
                       // ! bu degiskenin adı büyük harflerle yazılırsa daha dogru kullanım olur.
const SERVER_PASSWORD = "";

// degiskenlerde turkce ve diger dillerin kullanimi:
let türkçeBilgi = 'Türkçe Bilgi Yazdiriliyor..' // bu dogru kullanim degil :)
// let turkceBilgi // olmaz :(
let info ="Türkçe Bilgi Yazdiriliyor.." ;
console.log(info);

// !anlamsız degisken adlari kullanmayın!
let x = 1; //! Bu da dogru kullanim degil
//! x, y, z, i, e, gibi anlamsiz degisken isimlerini kullanmayin!


// !### Ek Bilgi:
// !1: Boolean tanımlarken is/has kullanımi:
let isActive = true;
let hasPassword = false;

// !2: Line Length < 80 satırda en fazla 80 karakter kullan. Altta col degeri yazıyor zaten yanında ln de yazılıyor.


