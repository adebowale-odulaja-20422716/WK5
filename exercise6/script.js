function myFunction() {
    var element = document.getElementById('circle');
    var opacity = parseFloat(element.style.opacity);
    element.style.opacity = opacity - 0.1;
}

function reduceOpacity() {
    setInterval(myFunction, 1000);
}

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.style.opacity = 1.0;
    element.addEventListener('click', reduceOpacity);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);