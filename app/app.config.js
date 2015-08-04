angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
    	/* ================================
            frontend views 
        =================================== */
        .when('/specs', {
            templateUrl: 'views/specs.html',
            controller: 'specs.ctrl'
        })


        /* ================================
            backend views 
        =================================== */
        .when('/login', {
        	templateUrl: 'views/admin/login.html',
            controller: 'login.ctrl'
        })

        .when('/admin', {
            templateUrl: 'views/admin/index.html',
            controller: 'admin.ctrl'
        });
}