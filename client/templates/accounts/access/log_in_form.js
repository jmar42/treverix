  Template.loginForm.events({ 
  'submit form': function(e) { 
    e.preventDefault();
    logemail = $(e.target).find('[name=email]').val(); 	
	logpassword = $(e.target).find('[name=password]').val();
	Meteor.loginWithPassword(logemail, logpassword,);
    setTimeout(function(){
      if (Meteor.user()) {
		  Router.go('home');
                if (user2Role.find({user: Meteor.user()._id}).count()==0){
                console.log('sin rol');
                }
				if (user2Role.find({role: userRole.findOne({rol: 'Administrador'})._id, user: Meteor.user()._id}).count()+1>1){
                console.log('administrador');
                }
				if (user2Role.find({role: userRole.findOne({rol: 'Moderador'})._id, user: Meteor.user()._id}).count()+1>1){
                console.log('moderador');
                }
       }else{
            //        Router.go('home');
                   alert('invalid email/password');
       }
       },2800);
  }
});



