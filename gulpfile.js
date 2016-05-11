'use strict';

var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var yaml = require('js-yaml');
var Handlebars = require('handlebars');

var template = Handlebars.compile(fs.readFileSync('src/ReactJS.hbs', 'utf8'));
var docTpl = Handlebars.compile(fs.readFileSync('src/doc.hbs', 'utf8'));
var readme = fs.readFileSync('README.md', 'utf8');

var templates = yaml.safeLoad(fs.readFileSync('src/template.yaml', 'utf8'));
var eventsTpl = yaml.safeLoad(fs.readFileSync('src/envents.yaml', 'utf8'));

var processTpl = function(tpl) {
  tpl = JSON.stringify(tpl);
  return tpl.replace(/\\n/g, '&#10;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

var data = [];
var docData = [];

for (var k in templates) {
  if (templates.hasOwnProperty(k)) {
    var t = templates[k];
    var tpl = t.tpl.next || t.tpl;
    tpl = tpl.replace(/: function/g, '').replace(/},/g, '}');

    var snippet = {
      name: k,
      description: t.description || t.tpl,
      tpl: processTpl(tpl),
      variables: t.variables || [],
      tplRaw: tpl
    };

    data.push(snippet);

    if (t.tpl.next ||
      (typeof t.tpl === 'string' && t.tpl.indexOf(': function') > -1)) {

      var tpl5 = t.tpl.es5 || t.tpl;
      var snippet5 = {
        name: k + '5',
        description: t.description || t.tpl,
        tpl: processTpl(tpl5),
        variables: t.variables || [],
        tplRaw: tpl5
      };

      data.push(snippet5);
    }
  }
}

function processEnventsTpl(eventsMap) {
  for (var key in eventsMap) {
    if (eventsMap.hasOwnProperty(key)) {
      var tplName = eventsMap[key];
      var tpl = `${key}={$END$}`;
      data.push({
        name: tplName,
        description: key,
        tpl: JSON.stringify(tpl),
        tplRaw: tpl
      });
      
    }
  }
}

processEnventsTpl(eventsTpl);

fs.writeFileSync('jetbrains/templates/ReactJS.xml', template(data));
fs.writeFileSync('README.md', readme.replace(
  /(<!--DOC_START-->)[\s\S]*(<!--DOC_END-->)/g,
  function(match, $1, $2) {
    return $1 + '\n' + docTpl(data) + '\n' + $2;
}));

gulp.task('default', function() {
  return gulp.src('jetbrains/**/*')
    .pipe(zip('jetbrains-react.jar'))
    .pipe(gulp.dest('.'));
});
