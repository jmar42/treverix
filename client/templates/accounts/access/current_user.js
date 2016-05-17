Template.currentuser.helpers({
    user: function() {
       // if(Meteor.user().services.facebook){
			//return Meteor.user().profile.name;
		//}
		if(Meteor.user().username){
			console.log('funciono');
			return Meteor.user().username; 
		}
    },
	notLoged: function() {
        if (Meteor.userId()===null) {
            return true;
        }else{
            return false;
        }
    }
});

Template.currentuser.events ({
	'click #login': function(e) {
    e.preventDefault();
    
    $('#loginModal').modal('show');
  },
  'click #singup': function(e) {
    e.preventDefault();
    
    $('#signupModal').modal('show');
  },
  'click .post': function() {
            Router.go('postPanel');	
  },
  'click .logOut': function(){
	  Meteor.logout(function() {
        // Ruta después de salir de la cuenta
        Router.go('home');
        });
  }
});