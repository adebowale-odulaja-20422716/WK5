function showAlert() {
    var element = document.getElementById('circle');
    var opacity = parseFloat(element.style.opacity);
    element.style.opacity = opacity - 0.1;   
}

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;
    element.addEventListener('click', showAlert);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);