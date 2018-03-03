const markdownPreview = document.querySelector('#markdownOutput');
const markdownInput = document.querySelector('#markdownInput');
let markdownText = markdownInput.value;

console.groupCollapsed('variablesOut');
console.log('markdownPreview', markdownPreview);
console.log('markdownInput', markdownInput);
console.log('markdownText', markdownText);
console.groupEnd();

function updateText(e) {
    markdownText = markdownInput.value;
    markdownPreview.innerHTML = marked(markdownText);
}

markdownInput.addEventListener('change', updateText);
markdownInput.addEventListener('keyup', updateText);
