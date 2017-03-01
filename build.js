'use strict';

const fs = require('fs');
const yaml = require('js-yaml');
const Handlebars = require('handlebars');
const read = (file) => {
  return fs.readFileSync(file, 'utf8');
};

const template = Handlebars.compile(read('src/ReactJS.hbs'));
const docTpl = Handlebars.compile(read('src/doc.hbs'));
const readme = read('README.md');
const templates = yaml.safeLoad(read('src/template.yaml'));
const eventsTpl = yaml.safeLoad(read('src/events.yaml'));

let escapeTpl = (tpl) => {
  tpl = tpl.replace(/\n/g, '&#10;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
  // .replace(/&/g, '&amp;')

  return JSON.stringify(tpl);
};

let data = [];

Object.keys(templates).forEach((k) => {
  const t = templates[k];
  const isMethod = (typeof t.tpl === 'string' && t.tpl.indexOf(': function') > -1);
  let tpl = t.tpl.next || t.tpl;
  tpl = tpl.replace(/: function/g, '');

  isMethod && (tpl = tpl.replace(/},/g, '}'));

  const snippet = {
    name: k,
    description: `React: ${t.description || t.tpl}`,
    tpl: escapeTpl(tpl),
    variables: t.variables || [],
    tplRaw: tpl
  };

  data.push(snippet);

  if (t.tpl.next ||
    (typeof t.tpl === 'string' && isMethod)) {

    const tpl5 = t.tpl.es5 || t.tpl;
    const snippet5 = {
      name: k + '5',
      description: `React: ${t.description || t.tpl}`,
      tpl: escapeTpl(tpl5),
      variables: t.variables || [],
      tplRaw: tpl5
    };

    data.push(snippet5);
  }
});

function processEventsTpl(eventsMap) {
  Object.keys(eventsMap).forEach((key) => {
    const tplName = eventsMap[key];
    const tpl = `${key}={$END$}`;

    data.push({
      name: tplName,
      description: `React: ${key}`,
      tpl: escapeTpl(tpl),
      tplRaw: tpl
    });
  });
}

processEventsTpl(eventsTpl);

fs.writeFileSync('jetbrains/templates/ReactJS.xml', template(data));
fs.writeFileSync('README.md', readme.replace(
  /(<!--DOC_START-->)[\s\S]*(<!--DOC_END-->)/g,
  function(match, $1, $2) {
    return $1 + '\n' + docTpl(data) + '\n' + $2;
  }));

// build jar
// @see http://www.codejava.net/java-core/tools/using-jar-command-examples
