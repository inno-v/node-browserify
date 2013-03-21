var browserify = require('../');
var vm = require('vm');
var test = require('tap').test;

test('circular', function (t) {
    t.plan(1);
    
    var b = browserify(__dirname + '/circular/main.js');
    b.bundle(function (err, src) {
        vm.runInNewContext(src, { t: t });
    });
});
