function color() {
StatusBar.backgroundColorByHexString("#2ECCFA");
}
function colorc() {
if (StatusBar.isVisible) {
document.getElementById("p").style.color = "green";
}
else {
document.getElementById("p").style.color = "red";
}
}
function changer() {
document.getElementById("p").style.color = "pink";
}
