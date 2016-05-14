Template.currentuser.helpers({
    user: function() {
        return Meteor.user().username;
    },
    userFB: function(){
	    return Meteor.user().profile.name;
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
});