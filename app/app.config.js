angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        /* ================================
            frontend 
        =================================== */
        .state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl: '/app/views/templates/header.html'
                },
                'navigation': {
                    templateUrl: '/app/views/templates/navigation.html',
                    controller: 'navigation.ctrl'
                },
                'body': {
                    templateUrl: '/app/views/frontend/home.html',
                    controller: 'home.ctrl'
                }
            }
        })
        .state('app.specs', {
            url:'specs',
            views:{
                'body@': {
                    templateUrl: '/app/views/frontend/specs.html',
                    controller: 'specs.ctrl'
                }
            }
            
        })


        /* ================================
            admin 
        =================================== */
        .state('login', {
            url:'/login',
            views: {
                'body':{
                    templateUrl: '/app/views/admin/login.html',
                    controller: 'login.admin.ctrl'
                }
            }
        	
        })

        .state('admin', {
            url:'/admin',
            views: {
                'navigation': {
                    templateUrl: '/app/views/templates/navigationAdmin.html',
                },
                'body':{
                    templateUrl: '/app/views/admin/home.html',
                }
            },
            controller: 'home.admin.ctrl'
        })

        .state('nav', {
            url:'/nav',
            views: {
                'navigation': {
                    templateUrl: '/app/views/templates/navigationAdmin.html',
                },
                'body':{
                    templateUrl: '/app/views/admin/nav.html',
                }
            },
            controller: 'home.nav.ctrl'
        });
}