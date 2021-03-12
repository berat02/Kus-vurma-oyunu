var skorEl = document.getElementById("skor")
var kuslar = document.getElementById("kuslar")
var birds = document.getElementsByClassName("bird");
skorEl.innerHTML = 0;

for(var i= 0 ;i<birds.length;i++){
    var item = birds[i];
    item.addEventListener("click", function() {
        this.style.display = "none";
        skorEl.innerHTML -= 1
        if (skorEl.innerHTML == -5) {
            alert("Tebrikler Bütün Kuşları Vurdun");
            kuslar.innerHTML = '<img id="img1" src="media/sapan.png">'
        }
    
    })
}

var kutu = document.getElementById("kutu");
kutu.style.position = "relative";

window.onmousemove = function(e) {
    kutu.style.left = e.clientX + "px";
    kutu.style.top = e.clientY + "px";
}