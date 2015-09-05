'use strict';

angular
    .module('app', [
        'firebase',
        'firebaseInit',
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
