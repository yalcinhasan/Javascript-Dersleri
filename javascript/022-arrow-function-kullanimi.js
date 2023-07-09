//! DERS-22

// *** Arrow Fonksiyon Kullanımı *** //

function hello(firstName) {
    console.log(`Merhaba ${firstName}`);
}
hello("Javascript");

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) };
helloFuncV1("helloFuncV1");

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`); // Bir tane degisken kullanacaksak yukarıdaki gibi parantez içine almaya gerek yok. 
helloFuncV2("helloFuncV2");                                           // Aynı şekilde bir tane islem yapılacağınadn süslü parantez kullanmya da gerekn yok.

// asağıdaki gibi bir yapı da kullanılabilir.
const helloFuncV3 = (firstName, lastName) => { console.log(`Merhaba ${firstName} ${lastName}`) };
helloFuncV3("helloFuncV3", "Last Name info");

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info);
    return info;
}
helloFuncV4("helloFuncV4", "Other Info");


//! Ekstra

/*
"this" keyword;

this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. 
Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu 
içerisindeki değeri her zaman parent fonksiyonuna eşittir. 
Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.
*/
let movie = { 

    name: "Harry Potter",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
    };
    movie.thisInArrow(); // output : Movie name is
    movie.thisInRegular(); // output : Movie name Harry Potter