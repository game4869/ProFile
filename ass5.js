var numCount = 0;

function postFunction() {
    var text = document.getElementById("text1").value;
    var text_x = document.getElementById("topic1");
    var text_y = document.getElementById("topic2");
    var text_z = document.getElementById("topic3");

    numCount++;

    if (numCount == 1) {
        text_x.textContent = text;
    } else if (numCount == 2) {
        text_y.textContent = text;
    } else if (numCount == 3) {
        text_z.textContent = text;
    }

}

window.onload = clearFunction;

function clearFunction() {
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("topic2").innerHTML = "";
    document.getElementById("topic3").innerHTML = "";

    numCount = 0;
}