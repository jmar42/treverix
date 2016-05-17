Template.home.onRendered (function(){
	if(Session.get('checked')){
		if(Meteor.user()){
		console.log('succes');
	    }
	}
});