require.config({
    'paths': {
        'text': '../components/requirejs-text/text',
        'jquery': '../components/jquery/jquery',
        'modernizr': '../components/modernizr',
        'underscore': '../components/lodash/lodash',
        'backbone': '../components/backbone-amd/backbone',
        //Plugins
        'backbone.forms': '../components/backbone-forms/distribution/backbone-forms.amd.min',
        'backbone.shortcuts': '../components/backbone-shortcuts/backbone.shortcuts',
        'backbone.validation': '../components/backbone-validation/dist/backbone-validation-amd-min',
        'backbone.collectionview': '../components/backbone.collectionview/backbone.collectionview.min'
    },
    'shim': {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.collectionview': {
            deps: ['backbone']
        }
    }
});

require(['app', 'backbone'], function (App) {
    'use strict';
    new App();
});