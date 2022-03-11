function showAlert() {
    //alert("You clicked the button, the colour will now change.");
    var element = document.getElementById('circle');
    element.style.backgroundColor = "blue";
    element.style.opacity = 0.5;
}

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.style.opacity = 1.0;
    element.addEventListener('click', showAlert);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);