'use strict';

angular
    .module('app', [
        'firebase',
        'firebaseInit',
        'slickslider',
        'ui.router',
        
        /* ================================
            frontend controllers 
        =================================== */
        'home.ctrl',
        'specs.ctrl',


        /* ================================
            admin controllers 
        =================================== */
        'home.admin.ctrl',
        'login.admin.ctrl'
        
        
    ]);
