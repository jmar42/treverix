//Subscription
Meteor.subscribe('allUsers');
//Helpers
Template.profileSettings.helpers({
    bio: function(){
		return Meteor.user().profile.bio;
	},
	firstName: function() {
        if(Meteor.user().username){
			return Meteor.user().profile.firstName //First name of the current user
		}
		if(Meteor.user().services.facebook){
	        return Meteor.user().services.facebook.first_name; //Name registered with facebook
		}
		if(Meteor.user().services.twitter){
			return Meteor.user().profile.name; //Name registered with twitter
		}
		if(Meteor.user().services.linkedin){
			return Meteor.user().profile.firstName; //Name registered with linkedin
		}
    },
	lastName: function() {
        if(Meteor.user().username){
			return Meteor.user().profile.lastName //First name of the current user
		}
		if(Meteor.user().services.facebook){
	        return Meteor.user().services.facebook.last_name; //Name registered with facebook
		}
		if(Meteor.user().services.twitter){
			return Meteor.user().profile.lastName; //Name registered with twitter
		}
		if(Meteor.user().services.linkedin){
			return Meteor.user().profile.lastName; //Name registered with linkedin
		}
    },
	email: function(){
		return Meteor.user().profile.email;
	},
	twusername: function(){
		if(Meteor.user().services.twitter){
			return Meteor.user().services.twitter.screenName; //Name registered with twitter
		}else{
		return Meteor.user().profile.twusername;	
		}
	},
	website: function(){
		return Meteor.user().profile.website;
	},
	role: function(){
		Meteor.setTimeout(function(){
		if(Meteor.user().profile.role == 'Accredited Investor'){
			$('.currentRole')[0].checked=true;	
		}
		if(Meteor.user().profile.role == 'Investment Advisor'){
			$('.currentRole')[1].checked=true;	
		}
		if(Meteor.user().profile.role == 'Share Holder'){
			$('.currentRole')[2].checked=true;	
		}
		if(Meteor.user().profile.role == 'International Investor'){
			$('.currentRole')[3].checked=true;	
		}
		return false;	
		},1000)
	},
	listin: function(){
        Meteor.setTimeout(function(){
			if(Meteor.user().profile.listin==true){
		    $('#checkbox1').prop('checked', true);
		    }
		    return false;
		},1000)
	},
	replies: function(){
		    Meteor.setTimeout(function(){
			if(Meteor.user().profile.replies==true){
		    $('#checkbox2').prop('checked', true);
		    }
		    return false;
		},1000)
	}
});
//Events
Template.profileSettings.events({ 
  'submit #profileConfig': function(e) { 
    e.preventDefault();
	console.log('submited')
	profileU = {};
	    id = Meteor.user()._id;
	    profileU.bio= $('#bio').val();
	    profileU.firstName= $('[name=edit_firstName]').val(); 
        profileU.lastName= $('[name=edit_lastName]').val(); 
        profileU.email= $('[name=edit_email]').val(); 
		profileU.twusername=$('#twusername').val();
		profileU.website=$('#website').val();
		    if($('#checkbox1').is(":checked")){
		        profileU.checked1 = true;
		    }else{
		        profileU.checked1 = false;
		    }
	        if($('#checkbox2').is(":checked")){
		        profileU.checked2 = true;
		    }else{
		        profileU.checked2 = false;
		    }
		inputTipo="";
	    var llorar= $('[name="role"]');
            for(var i=0; i<llorar.length; i++) {
				if (llorar[i].checked==true) {
                inputTipo = llorar[i].value;
				}			
            }
		profileU.role = inputTipo;
		Meteor.users.update(Meteor.userId(), {$set: {
					"profile.bio": profileU.bio, 
					"profile.firstName": profileU.firstName, 
					"profile.lastName": profileU.lastName,
					"profile.email": profileU.email,
					"profile.twusername": profileU.twusername,
					"profile.website": profileU.website,
					"profile.listin": profileU.checked1,
					"profile.replies": profileU.checked2,
					"profile.role": profileU.role
					}
		});
	
  }
});