'use strict';

angular
    .module('app', [
        'firebase',
        'firebaseInit',
        'ui.router',
        'ngWig',
         
        /* ================================
            frontend controllers 
        =================================== */
        'home.ctrl',
        'navigation.ctrl',
        'specs.ctrl',


        /* ================================
            admin controllers 
        =================================== */
        'home.admin.ctrl',
        'login.admin.ctrl',
        'nav.admin.ctrl',
        'addPost.admin.ctrl',
        'media.admin.ctrl'
        
    ]);
