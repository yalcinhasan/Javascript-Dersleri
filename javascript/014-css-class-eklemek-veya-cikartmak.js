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