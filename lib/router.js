Router.configure({
    layoutTemplate: 'layout',
	loadingTemplate: 'loading',
    notFoundTemplate: 'paginaNoExiste'
});
Router.route('/',{name: 'home'});
Router.route('/terms-of-service',{name: 'termsOfService'});
Router.route('/privacy-policy',{name: 'privacyPolicy'});
Router.route('/profile-settings',{name: 'profileSettings'});
Router.route('/my-profile',{name: 'myProfile'});
Router.route('/post', {name:'postPanel'});