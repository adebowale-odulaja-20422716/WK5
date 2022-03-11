function changeElement() {
    var element = document.getElementById('headTag');
    element.firstChild.nodeValue = 'NEW HEADING';   
}

function loadFunc() {
    var element = document.getElementById('headTag');
    element.addEventListener('click', changeElement);
}

document.addEventListener('DOMContentLoaded', loadFunc);