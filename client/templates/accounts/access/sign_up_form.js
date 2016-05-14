Template.signUpForm.helpers({
  //trusted: function() {
	//if(Session.get('truster')==1234){
		//return true;
	//};
});
Template.signUpForm.events({ 
    //'submit #trueadmin': function(e) { 
   // e.preventDefault(); 
   // truster = $(e.target).find('[name=truster]').val(); 	
    //Session.set('truster',truster);
 // },
  'submit #signUp': function(e) { 
    e.preventDefault();
    logemail = $(e.target).find('[name=email]').val(); 
    logname = $(e.target).find('[name=name]').val(); 	
	logpassword = $(e.target).find('[name=password]').val();
	//Session.set('truster','invalid');
	Accounts.createUser({email: logemail, username: logname, password: logpassword});
  }
});