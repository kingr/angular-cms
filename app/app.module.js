'use strict';

angular
    .module('app', [
        'ngRoute',
        'firebase',

        /* ================================
            frontend controllers 
        =================================== */
        'specs.ctrl',


        /* ================================
            backend controllers 
        =================================== */
        'login.ctrl',
        'admin.ctrl'

        
]);
