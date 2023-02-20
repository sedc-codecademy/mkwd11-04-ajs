import txtService from './txtService.js';
const { addText, appendText, readText } = txtService;


addText('Hello there Class');
appendText('\nThis is a new line in the file')
appendText('\nThis is a second line in the file')
// console.log(readText())