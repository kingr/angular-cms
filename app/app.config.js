angular
    .module('app')
    .config(config);

function config($routeProvider) {
    $routeProvider
    	/* ================================
            frontend 
        =================================== */
        .when('/', {
            templateUrl: 'views/frontend/home.html',
            controller: 'home.ctrl'
        })

        .when('/specs', {
            templateUrl: 'views/frontend/specs.html',
            controller: 'specs.ctrl'
        })


        /* ================================
            admin 
        =================================== */
        .when('/login', {
        	templateUrl: 'views/admin/login.html',
            controller: 'login.admin.ctrl'
        })

        .when('/admin', {
            templateUrl: 'views/admin/home.html',
            controller: 'index.admin.ctrl'
        });
}