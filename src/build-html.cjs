const fs = require('fs');
const path = require('path');

const src = 'C:/Users/PC/Downloads/AWS trivia/Trivia app.txt';
const templatePath = 'C:/Users/PC/Downloads/AWS trivia/trivia-html/template.html';
const outPath = 'C:/Users/PC/Downloads/AWS trivia/trivia-html/index.html';

const txt = fs.readFileSync(src, 'utf8');
const start = txt.indexOf('const QUESTIONS_DATABASE = [');
if (start < 0) throw new Error('No se encontró QUESTIONS_DATABASE');
const end = txt.indexOf('];', start);
if (end < 0) throw new Error('No se encontró cierre del array');

const arrayLiteral = txt.slice(start + 'const QUESTIONS_DATABASE = '.length, end + 1);
const template = fs.readFileSync(templatePath, 'utf8');
const output = template.replace('__QUESTIONS_ARRAY__', arrayLiteral);

fs.writeFileSync(outPath, output, 'utf8');
console.log('Generado:', outPath);
