//! DERS-20

// *** Ilk Fonksiyonumuz tanimlamak *** //

function hello() {
    console.log("Merhaba");
    helloWorld(); // helloWorld() fonkunu cagiriyoruz.
}

function helloWorld() { // bu fonku tanımladıktan sonra hello fonkunun icinden bu fonku cagiralim
    console.log("Hello World!")
}

// Asagidaki fonksiyon calismayacacktir. Cunku dısarıdan bagımlı oldugu degiskenler vardir ve bu degiskenler tanimli olmadigindan calismayacaktir.
// function userCheck() {
//     if (userName && age >= 18) {
//         //console.log("Ehliyet alabilirsiniz");
//         info.innerHTML = "Ehliyet alabilirsiniz";
//     } else if (!userName) {
//         //console.log("Kullanici adiniz yok!")
//         info.innerHTML = "Kullanici adiniz yok!";
//     } else if (!(age >= 18)){
//         //console.log("Yas bilginiz yok veya 18 yasindan kucuksunuz")
//         info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
//     }
// }


hello(); // fonksiyonu cagirmak lazım


//! EKstra

/*
Arrow Functions:

Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, 
daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.
*/

// Asagidaki iki fonksiyondan aynı seydir.
let func = (param1, param2, param3) => expression; 

let func2 = function (param1, param2, param3) {
    return expression;
};

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/* // Daha uzun hali ise; const carpim = function(sayi1,sayi2){ return sayi1 * sayi2; } */

console.log(carpim(3, 5));

/*
Recursion:

Direkt örnek vererek açıklamak gerekirse, yapmamız gereken bir task var diyelim ve biz bu task'i birden 
fazla parçaya ayırıp daha basit halde yazmak istersek veya bu task'ı aksiyon alacak bir fonksiyona ve bu task'i 
daha basit bir task'e dönüştürmek istersek veya belirli bir data yapısı ile ilgileniyorsak, recursion bu noktada 
bize yardımı dokunabilecek bir programlama pattern'idir diyebiliriz.

Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini 
tekrar çağırıyor ise biz buna recursion diyoruz.
*/

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

    alert(pow(2, 3)); // 8
  // recursion ile
function pow(x, n) {
    if (n == 1) {
    return x;
    } else {
        return x * pow(x, n - 1);
    }
}

    alert(pow(2, 3)); // 8


/*Nested Functions
Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. 
Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.
*/
function programDetayi(bootcamp, organizasyon) {
    // nested yardımcı fonk
    const tumProgram = () => bootcamp + ' ' + organizasyon;

    console.log('Basladi, ' + tumProgram());
    consol.log('Bitti, ' + tumProgram());
}