
//Helpers
Template.myProfile.helpers({
    name: function() {
        if(Meteor.user().username){
			return Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName; //Full name of the current user
		}
		if(Meteor.user().services.facebook){
	        return Meteor.user().profile.name; //Name registered with facebook
		}
		if(Meteor.user().services.twitter){
			return Meteor.user().profile.name; //Name registered with twitter
		}
		if(Meteor.user().services.linkedin){
			return Meteor.user().profile.firstName; //Name registered with linkedin
		}
    },
	joined: function(){
		return Meteor.user().profile.joined;
	},
	profilePic: function(){
		if(Meteor.user().username){
		return Meteor.absoluteUrl()+'defaultPic.png'; //Default profile picture
		}
		if(Meteor.user().services.facebook){
	        return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"; //Url of the profile picture in Facebook
		}
		if(Meteor.user().services.twitter){
			return Meteor.user().services.twitter.profile_image_url; //Url of the profile picture in twitter
		}
		if(Meteor.user().services.linkedin){
			return Meteor.user().services.linkedin.pictureUrl; //Url of the profile picture in likedIn
		}
	}
});