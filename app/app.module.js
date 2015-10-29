'use strict';

angular
    .module('app', [
        /* ================================
            CORE 
        =================================== */
        'firebase',
        'firebaseInit',
        'ui.router',
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
        'media.admin.ctrl',
        
        /* ================================
            DIRECTIVES 
        =================================== */
        'ngWig',
        'mediaGalleryContructor'
    ]);
