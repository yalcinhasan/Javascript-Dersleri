//! DERS-23

// *** DOM Etkinlikleriyle Calismak *** //

//! Kaynak= https://www.w3schools.com/jsref/dom_obj_event.asp


let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick); // "mouseover" ornegini de kullanabilirsiniz

function domClick() {
    console.log("Tıklandı!");
    //console.log(this.innerHTML = "Tıklandığı için bilgi değişti!");
    // this.style.color = "red";
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"; // short-if
    //alert("Tıklandı!");
}