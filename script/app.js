const keys = document.querySelectorAll('.keyb');
const printer = document.getElementById('display');
const spaceclick = document.getElementById('space');
const backspaceclick = document.querySelector('#backspace');

function printchar(charcterTyped) {
    var elem = document.createElement("img");
    elem.src = '/imgs/' + charcterTyped + '/' + charcterTyped + '.png';
    elem.width = 80;
    printer.appendChild(elem);
}
keys.forEach(key => {
    key.addEventListener('click', () => {
        printchar(key.getAttribute('class')[0]);
    });
});
spaceclick.addEventListener('click', () => {
    var elem = document.createElement("span");
    var text = document.createTextNode('\u00A0\u00A0\u00A0');
    elem.appendChild(text);
    printer.appendChild(elem)

})
backspaceclick.addEventListener('click', () => {
    if (printer.hasChildNodes) {
        printer.removeChild(printer.lastChild);
    }
})