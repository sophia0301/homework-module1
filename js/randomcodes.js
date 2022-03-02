function verificationRecall() {
    var verificationRecall = document.getElementById("verification-input").value;
    document.getElementById("recall").innerHTML = verificationRecall;
}
var display = document.getElementById("enter");
display.addEventListener("click", function() {
verificationRecall();
});