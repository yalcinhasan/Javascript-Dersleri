//! DERS-14

// *** css class eklemek veya cikartmak *** //

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info","second-class","third-class"); // coklu class ekleme islemi de yapılabilir

// icerisinden class silmek
// greeting.classList.remove("text-primary");
greeting.classList.remove("title","second-class","third-class"); // coklu class silme islemi de yapılabilir.


console.log(greeting.classList);

//! Ekstra Onrekler

// item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) 
// daha büyük veya length'ine eşit olursa undefined döner.
console.log(greeting.classList.item(0));
console.log(greeting.classList.item(3)); // null dondu. :)

// contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz
console.log(greeting.classList.contains('title')); // false donecektir.
console.log(greeting.classList.contains('new-info')); // true donecektir.

// replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.

// length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.
