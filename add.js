const keyboard = document.getElementById('keyboard');


// определяем массив клавиш
const keys = [
{ keyCode: 192, value: '`', shiftValue: '~' },
{ keyCode: 49, value: '1', shiftValue: '!' },
{ keyCode: 50, value: '2', shiftValue: '@' },
{ keyCode: 51, value: '3', shiftValue: '#' },
{ keyCode: 52, value: '4', shiftValue: '$' },
{ keyCode: 53, value: '5', shiftValue: '%' },
{ keyCode: 54, value: '6', shiftValue: '^' },
{ keyCode: 55, value: '7', shiftValue: '&' },
{ keyCode: 56, value: '8', shiftValue: '*' },
{ keyCode: 57, value: '0', shiftValue: ')' },
{ keyCode: 189, value: '-', shiftValue: '_' },
{ keyCode: 187, value: '=', shiftValue: '+' },
{ keyCode: 8, value: 'backspace', shiftValue: 'backspace' },
{ keyCode: 9, value: 'tab', shiftValue: 'tab' },
{ keyCode: 81, value: 'q', shiftValue: 'Q' },
{ keyCode: 87, value: 'w', shiftValue: 'W' },
{ keyCode: 69, value: 'e', shiftValue: 'E' },
{ keyCode: 82, value: 'r', shiftValue: 'R' },
{ keyCode: 84, value: 't', shiftValue: 'T' },
{ keyCode: 89, value: 'y', shiftValue: 'Y' },
{ keyCode: 85, value: 'u', shiftValue: 'U' },
{ keyCode: 73, value: 'i', shiftValue: 'I' },
{ keyCode: 79, value: 'o', shiftValue: 'O' },
{ keyCode: 80, value: 'p', shiftValue: 'P' },
{ keyCode: 219, value: '[', shiftValue: ']' },
{ keyCode: 221, value: ']', shiftValue: ']' },
// { keyCode: 220, value: '\', shiftValue: '|' },
{ keyCode: 20, value: 'capslock', shiftValue: 'capslock' },
{ keyCode: 65, value: 'a', shiftValue: 'A' },
{ keyCode: 83, value: 's', shiftValue: 'S' },
{ keyCode: 68, value: 'd', shiftValue: 'D' },
{ keyCode: 70, value: 'f', shiftValue: 'F' },
{ keyCode: 71, value: 'g', shiftValue: 'G' },
{ keyCode: 72, value: 'h', shiftValue: 'H' },
{ keyCode: 74, value: 'j', shiftValue: 'J' },
{ keyCode: 75, value: 'k', shiftValue: 'K' },
{ keyCode: 76, value: 'l', shiftValue: 'L' },
{ keyCode: 186, value: ';', shiftValue: ':' },
// { keyCode: 222, value: ''', shiftValue: '"' },
{ keyCode: 13, value: 'enter', shiftValue: 'enter' },
{ keyCode: 16, value: 'shift', shiftValue: 'shift' },
{ keyCode: 90, value: 'z', shiftValue: 'Z' },
{ keyCode: 88, value: 'x', shiftValue: 'X' },
{ keyCode: 67, value: 'c', shiftValue: 'C' },
{ keyCode: 86, value: 'v', shiftValue: 'V' },
{ keyCode: 66, value: 'b', shiftValue: 'B' },
{ keyCode: 78, value: 'n', shiftValue: 'N' },
{ keyCode: 77, value: 'm', shiftValue: 'M' },
{ keyCode: 188, value: ',', shiftValue: '<' },
{ keyCode: 190, value: '.', shiftValue: '>' },
{ keyCode: 191, value: '/', shiftValue: '?' },
{ keyCode: 38, value: 'upArrow' },
{ keyCode: 17, value: 'ctrl', shiftValue: 'ctrl' },
{ keyCode: 91, value: 'cmd', shiftValue: 'cmd' },
{ keyCode: 18, value: 'alt', shiftValue: 'alt' },
{ keyCode: 32, value: 'space', shiftValue: 'space' },
{ keyCode: 93, value: 'cmd', shiftValue: 'cmd' },
{ keyCode: 37, value: 'leftArrow', shiftValue: 'leftArrow' },
{ keyCode: 40, value: 'downArrow', shiftValue: 'downArrow' },
{ keyCode: 39, value: 'rightArrow', shiftValue: 'rightArrow' }
];
// Loop through the keys array and create a button element for each key
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const button = document.createElement('button');
    button.setAttribute('data-key-code', key.keyCode);
    button.innerHTML = key.value;
    keyboard.appendChild(button);
  }

 