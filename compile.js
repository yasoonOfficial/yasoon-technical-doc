var md = require('markdown-it')({ html: true });
var Promise = require('bluebird');
var toc = require('markdown-toc');
var fs = Promise.promisifyAll(require("fs"));
var wkhtmltopdf = require('wkhtmltopdf');

var contents = '';
fs.readdirAsync('content')
.then(function(filenames) {
    filenames = filenames.filter(function(el) { return el.indexOf('.md') > 0; });
    return filenames.sort();
})
.map(function(filename) {
    return fs.readFileAsync('content/' + filename, 'utf-8');
})
.each(function(filecontent) {
    contents += '\n\n<div style="page-break-before: always">&nbsp;</div>\n\n';
    contents += '\n\n' + filecontent;
})
.then(function() {
    contents = toc.insert(contents);    
    md.use(genId());

    var result = md.render(contents);
    return fs.writeFileAsync("index.html", result);
})
.then(function() {
    wkhtmltopdf(fs.createReadStream('index.html'), { 
        output: 'out.pdf',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 20,
        headerSpacing: 5,
        footerRight: 'Page [page]/[toPage]',
        userStyleSheet: 'content/main.css',
        headerHtml: 'content/header.html'
    });
});

function genId() {
    return function(md) {
        var old_render = md.renderer.rules.heading_open || function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

        md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
            var id = tokens[idx + 1].content.toLowerCase().replace(/ /g, '-').replace(/\./g, '').replace(/&/, '');
            tokens[idx].attrPush(['id', id]);
            return old_render(tokens, idx, options, env, self);
        };
    };
}