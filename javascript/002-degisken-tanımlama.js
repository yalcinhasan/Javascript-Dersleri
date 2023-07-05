//! DERS-2
// ********* let ve const ********* //

//# var ile degisken tanimlamak:
/* Global scope veya function scope'ta deklarasyon sağlayamaya yarayan keyword'dur. Scope özelliklerini daha sonra örneklerle açıklayacağız. var ile tanımlanan değişkenlerin özellikleri şunlardır.
 - Değişken değerleri değiştirilebilir.
 - Aynı isimle tekrardan tanımlanabilirler.
 - var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan 
  değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı 
   olduğu fonksiyonda ulaşılabilir. Bu konuyu örneklerle açıklayalım. */

var namelet =  "Hasan var";
console.log(namelet);

//# let ile degiskeni bos tanimlamak:
/*
Değişkenleri block scope'ta tanımlayan deklarasyondur. let ile tanımlanan değişkenlerin özellikleri şunlardır.
- Değişken değerleri değiştirilebilir.
- Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı block'larda aynı isimle tanımlanabilir
*/

// let name;
// console.log(name);

//# let ile degiskene bilgi atamak:
let name = "Hasan let";
console.log(name);

//# let ile degiskene bilgi atayarak tanimlamak:
let password ="12345"
console.log(password);

//# degisken atamasi yapmadan once kullanmaya calismak:

// console.log(fullName);
// let fullName = "Hasan Yalçın"; // HATALI KULLANIM !!
let fullName = "Hasan Yalçın";
console.log(fullName);

//let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName2 = "Lorem Ipsum Dolor";
console.log(fullName2);

// birlestirme veya ekleme islemi
fullName2 + "Yeni eklenen bilgi"; // Böyle bir ekleme olmaz.
console.log(fullName2 + " Test Bilgisi"); // Ekle ve göster ama degiskene eklemedik

fullName2 = fullName2 + " Yeni Bilgi"; // Ekleme böyle olur.
console.log(fullName2);

fullName2 = "Sıfırlandı";
fullName2 += " ve yeni bilgi eklendi"; // += dersek; Hem üstteki bilgi alınır hemde yeni bilgi eklendi
console.log(fullName2);
//# const ile degiskeni bos tanimlamaya calismak :( :

// const serverPassword ; // !HATALI KULLANIM!!  Degisken tanımlayıp içini boş bırakamayız!

//# const ile degisken tanimlamak:
const SERVER_PASSWORD = "random";
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD = "random123";
// console.log(SERVER_PASSWORD); // !Bir değişkenin değeri değişmeyecekse const ile tanımlanır değişecekse let ile tanımlanır !!

/* 
!Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword'dür.
- Const ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. 
  Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.
*/
