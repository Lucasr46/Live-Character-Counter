const textArea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

function countingCharacters(){

const textLength = textArea.value.length;
console.log(textLength);

counter.innerHTML = `${textLength}`;
}

