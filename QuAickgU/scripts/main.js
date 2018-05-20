var thebutton = document.getElementById("theButton");
var thetext = document.getElementById("theText")


thebutton.onmouseup = changeText;
function changeText() {
    thetext.innerHTML = "Aron Lam"
}
