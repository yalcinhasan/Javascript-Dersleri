//! DERS-9


// *** Document Object Model(DOM) *** //

/* Document Object Model, programların ve komut dosyalarının bir belgenin içeriğine, 
yapısına ve stiline dinamik olarak erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür. */

/* Tarayıcının belgeyi temsil etmek için kullandığı veri yapısı bu şekli izler. Her kutu için, hangi HTML etiketini temsil ettiği ve 
hangi kutuları ve metni içerdiği gibi şeyleri bulmak için etkileşime girebileceğimiz bir nesne vardır. 
Bu temsil, Document Object Model veya kısaca DOM olarak adlandırılır. */


// hostname bilgisini verir.
console.log(document.location.hostname);

//pathname bilgisini verir.
console.log(document.location.pathname);

// body kısmını verir.
console.log(document.body);
document.body.style.backgroundColor = "aqua"; // eriştikten sonra üzerinden işlemlerde yapabiliriz

// head kısmını verir.
console.log(document.head);


// url bilgileri.
console.log(document.URL);
console.log(document.baseURI);

// NOT!!: DOM yapısını bir daha çalış.
