'use strict';

angular
    .module('app', [
        'ngRoute',
        'firebase',
        'firebaseInit',

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
