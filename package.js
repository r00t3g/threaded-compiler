Package.describe({
    name: 'threaded-compiler',
    version: '0.0.1',
    summary: 'Threaded Babel/TS compiler',
    git: 'https://github.com/r00t3g/meteor-threaded-compiler.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.1');
    api.use('ecmascript');
    api.mainModule('threaded-compiler.js');
});

