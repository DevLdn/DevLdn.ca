require('laravel-elixir-imagemin');
var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.styles([
        'bootstrap.css',
        'landing-page.css',
        'font-awesome.css',
        'lato.css'
    ]);
    mix.scripts([
        'jquery.js',
        'bootstrap.js',
        'app.js'
    ]);
    mix.imagemin();
    mix.version(['css/all.css', 'js/all.js', 'public/images']);
});

