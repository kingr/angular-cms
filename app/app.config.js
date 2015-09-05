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
                    templateUrl: 'views/templates/header.html'
                },
                'navigation': {
                    templateUrl: 'views/templates/navigation.html'
                },
                'body': {
                    templateUrl: 'views/frontend/home.html'
                }
            },
            controller: 'home.ctrl'
        })
        .state('app.specs', {
            url:'specs',
            views:{
                'body@': {
                    templateUrl: 'views/frontend/specs.html',
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
                    templateUrl: 'views/admin/login.html',
                    controller: 'login.admin.ctrl'
                }
            }
        	
        })

        .state('admin', {
            url:'/admin',
            views: {
                'body':{
                    templateUrl: 'views/admin/home.html',
                }
            },
            controller: 'home.admin.ctrl'
        });
}