var texto = document.getElementById("text");
var cbxBig = document.getElementById("Big");
var cbxSmall = document.getElementById("Small");




function textChangeToBig() {
    if (cbxBig.checked) {
        texto.value = texto.value.toUpperCase();
    }

}

function textChangeToSmall() {
    if (cbxSmall.checked) {
        texto.value = texto.value.toLowerCase();
    }

}
