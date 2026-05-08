const fs = require('fs');

const src = 'C:/Users/PC/Downloads/AWS trivia/Trivia app.txt';
const out = 'C:/Users/PC/Downloads/AWS trivia/trivia-html/data-editable.js';

const txt = fs.readFileSync(src, 'utf8');
const start = txt.indexOf('const QUESTIONS_DATABASE = [');
const end = txt.indexOf('];', start);
if (start < 0 || end < 0) throw new Error('No se encontro QUESTIONS_DATABASE');

const literal = txt.slice(start + 'const QUESTIONS_DATABASE = '.length, end + 1);
const rawQuestions = Function(`"use strict"; return (${literal});`)();

const questions = rawQuestions.map((q) => ({
  subjectId: 'dea',
  topicId: `dea-${q.topic}`,
  question: q.question,
  options: q.options,
  answer: q.answer,
  hint: q.hint,
  explanation: q.explanation,
}));

const data = {
  passPercent: 70,
  subjects: [
    { id: 'dea', name: 'AWS Data Engineer Pro', active: true },
    { id: 'ccp', name: 'AWS Cloud Practitioner', active: true },
    { id: 'fund', name: 'Fundamentos', active: true },
  ],
  topics: [
    { id: 'dea-0', subjectId: 'dea', name: '0. Introduccion', active: true },
    { id: 'dea-1', subjectId: 'dea', name: '1. Data Ingestion and Transformation', active: true },
    { id: 'dea-2', subjectId: 'dea', name: '2. Data Store Management', active: true },
    { id: 'dea-3', subjectId: 'dea', name: '3. Data Operations and Support', active: true },
    { id: 'dea-4', subjectId: 'dea', name: '4. Data Security and Governance', active: true },
    { id: 'dea-5', subjectId: 'dea', name: '5. In-Scope / Out-of-Scope Services', active: true },

    { id: 'ccp-0', subjectId: 'ccp', name: '0. Conceptos de Nube', active: true },
    { id: 'ccp-1', subjectId: 'ccp', name: '1. Seguridad y Cumplimiento', active: true },

    { id: 'fund-0', subjectId: 'fund', name: '0. Fundamentos Generales', active: true },
  ],
  questions,
};

const content = `/*
EDITA ESTE ARCHIVO EN BLOC DE NOTAS.

SNIPPET NUEVA MATERIA:
{ id: 'devops', name: 'AWS DevOps Engineer', active: true }

SNIPPET NUEVO TOPICO:
{ id: 'devops-0', subjectId: 'devops', name: '0. CI/CD', active: true }

SNIPPET NUEVA PREGUNTA:
{
  subjectId: 'devops',
  topicId: 'devops-0',
  question: 'Aqui va la pregunta',
  options: ['Opcion A', 'Opcion B', 'Opcion C', 'Opcion D'],
  answer: 'Opcion B',
  hint: 'Pista corta',
  explanation: 'Explicacion breve'
}

REGLAS:
- answer debe ser exactamente una opcion de options.
- topicId debe existir en topics.
- subjectId debe existir en subjects.
*/
window.TRIVIA_DATA = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(out, content, 'utf8');
console.log('Generado:', out);
