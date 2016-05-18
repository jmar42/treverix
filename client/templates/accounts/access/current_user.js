
Template.currentuser.helpers({
    user: function() {
        if(Meteor.user().username){
			return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName; //Full name of the current user
		}
		if(Meteor.user().services.facebook){
			//Subscription
			Meteor.subscribe('allUsers');
			//Update the profile for the first time
			if(Session.get('username')){
				Meteor.users.update(Meteor.userId(), {$set: {"profile.username": Session.get('username'), "profile.role": Session.get('inputTipo')}});
			}
	        return Meteor.user().profile.name; //Name registered with facebook
		}
		if(Meteor.user().services.twitter){
			//Subscription
			Meteor.subscribe('allUsers');
			//Update the profile for the first time
			if(Session.get('username')){
				Meteor.users.update(Meteor.userId(), {$set: {"profile.username": Session.get('username'), "profile.role": Session.get('inputTipo')}});
			}
			return Meteor.user().profile.name; //Name registered with twitter
		}
		if(Meteor.user().services.linkedin){
		    //Subscription
			Meteor.subscribe('allUsers');
			//Update the profile for the first time
			if(Session.get('username')){
				Meteor.users.update(Meteor.userId(), {$set: {"profile.username": Session.get('username'), "profile.role": Session.get('inputTipo')}});
			}
			return Meteor.user().profile.firstName; //Name registered with linkedin
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
        Router.go('home');
        });
  }
});