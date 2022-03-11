/*function moveElement() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', moveElement);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);*/

function onKeyPress() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}

function myKeyEvent() {
    document.addEventListener('keypress', onKeyPress);
}

document.addEventListener('DOMContentLoaded', myKeyEvent);