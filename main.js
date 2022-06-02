console.log(Math.PI);
console.log(Math.round(4.7));
let a = Math.pow(8, 2);
console.log(a);

var sum = 0;
for (var i = 0; i < 100; i++) {
    sum = sum + i;
}
console.log(sum);


var sum = 0;
var i = 0;
while (i < 100) {
    sum = sum + i;
    i += 1;
}
console.log(sum);

Array
var name = [];
var names = [5, 8, 9, 7, 4, 10];
console.log(names[5]);
names[5] = 6;
console.log(names);

var names = new Array(5, 8, 9, 7, 4, 10)
console.log(names[4]);


console.log(text);

function pageLoad() {
    var clickButton = document.getElementById("clickme");
    clickButton.onclick = myFunction;
}

window.onload = pageLoad;

window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = myFormfunction;
}

function myFormfunction() {
    alert("OK");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const firstname = urlParams.get('firstname')
console.log(firstname);

const lastname = urlParams.get('lastname')
console.log(lastname);