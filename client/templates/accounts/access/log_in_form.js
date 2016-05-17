  Template.loginForm.events({ 
  'submit form': function(e) { 
    e.preventDefault();
    logemail = $(e.target).find('[name=email]').val(); 	
	logpassword = $(e.target).find('[name=logPassword]').val();
	setTimeout(function(){
            if (Meteor.user()) {
            alert('Open session');
            }else{
                Meteor.loginWithPassword(logemail, logpassword,);
				Router.go('home');
            }
		$('#loginModal').modal('hide');
        },800); 
  },
  'click #gotoSignUp': function(){
	  $('#loginModal').modal('hide');
	  $('#signupModal').modal('show');
	  
  },
  'click .loginFb': function(e){
	  setTimeout(function(){
            if (Meteor.user()) {
            alert('Open session');
            }else{
                Meteor.loginWithFacebook();
            }
		$('#loginModal').modal('hide');
        },800); 
  },
  'click .loginTw': function(){
	  setTimeout(function(){
            if (Meteor.user()) {
            alert('Open session');
            }else{
                Meteor.loginWithTwitter();
            }
		$('#loginModal').modal('hide');
        },800); 
  },
  'click .loginLd': function(){
	  setTimeout(function(){
            if (Meteor.user()) {
            alert('Open session');
            }else{
                Meteor.loginWithLinkedin();
            }
		$('#loginModal').modal('hide');
        },800); 
  },
  
});



