//! DERS-4


//!  ***number***
/* JavaScript dili weakly-typed yani güçsüz türlü bir dildir. Değişkenlerin ve parametrelerin türlerini bildirmek gerekmez. 
Tür kullanımdan dolaylı olarak çıkartılır. */

// number veri turu tanimlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax 
let total = price + priceTax
console.log(
    "Fiyat: ", price, 
    "KDV Orani: ", tax, 
    "KDV Tutari: ", priceTax,
    "Fiyat: ", total)

    /* ekstra ornek --> Number Constructor */
let stringNumber= "21" ;
console.log(stringNumber); // console 'da baktığınızda bunun rengi farklı görünecektir. String renginde görünecektir.

let newNumber = Number(stringNumber); // Number() fonk.'u string degeri number degere cevirir. Burada ki string deger number renginde görünecektir. 
console.log("number'a cevrilmis string deger: ", newNumber);

/* artirma ve azalma islemleri: */
let counter = 5
//counter = counter + 1 // böylede artırma işlemi yapılabilir.
//counter += 5  // böylede yapılabilir
counter ++; // bu ise her seferinde bir defa artırır.
console.log("yeni deger: " ,counter)
// counter --; // Bu da her defasında bir defa eksiltme islemi
// counter *= 10; // bu da carptirma islemi

/* islem onceligi: */
console.log(2+3*5) // sonuc 17 cikacaktir cunku; islem onceligi devreye giriyor.
console.log( (2 + 3) * 5 ) // sonuc 25 cikacaktir cunku; once parantez icinde islem yapilit sonra disarida ki islem yapilir.

/* mod(kalan) alma %:  */
console.log(10 % 8)
console.log(5 % 4)

/* ya da sayi tek mi cift mi */
// bir sayının tek mi ya da cif mi oldugunu ogrenmek icin onu ikiye boleriz
console.log(5 % 2) // tektir cunku; kalan 1 dir.
console.log(10 % 2) // cifttir cunku; kalan 0 dir.

/* us alma **: */
console.log(2**5) // a sayının b kadar ussunu alma islemi söyledir; a**b

/* asagi yuvarlama islemi -> Math.floor : */
console.log("asagi yuvarlama islemi: ", Math.floor(1.9) ) // deger 1.9 olmasina ragmen 1'e yuvarlanmistir.
let a = 5;
let b = 2.5;
let c= a + b ; // bu sonuc = 7.5 dir
console.log( "asagi yuvarlama islemi: ",Math.floor(c)); // bu sonuc ise = 7 dir.

/* yukari yuvarlama islemi -> Math.ceil : */
console.log("yukari yuvarlama islemi: ", Math.ceil(1.1)) // deger 1.1 olmasina ragmen 2'ye yuvarlanacaktir.
let x = 4;
let y = 2.1;
let z = x * y; // sonuc 8.4 olacaktir
console.log( "yukari yuvarlama islemi: ", Math.ceil(z)); // burada ise 8.4'ü 9'a yuvarlama islemi olacaktir.

/* yakina yuvarlama islemi -> Math.round : */
// en yakin oldugu degere yuvarlanir
console.log("yakina yuvarlama islemi: ", Math.round(1.4)); // 1'e yuvarlanir
console.log( "yakina yuvarlama islemi: ", Math.round(1.6)); // 2'ye yuvarlanir
console.log( "yakina yuvarlama islemi: ", Math.round (3.5)); // 4'e yuvarlanir