Template.signUpForm.onRendered (function(){
	$('#disscard').hide();
});
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
	firstName=$('#firstName').val(); 
    lastName=$('#lastName').val();
	username=$('#username').val();
    email=$('#useremail').val();
    password1=$('#password').val();
    password2=$('#confirmPassword').val();
	checked=$('#checkbox:checked').val();
	var llorar= $('[name="role"]');
            for(var i=0; i<llorar.length; i++) {
				if (llorar[i].checked==true) {
                inputTipo = llorar[i].value;
				}
						
            }
	
        if( firstName=="" || lastName=="" || username==""|| email=="" || password1=="" || password1.length<8 && password1!=password2 || inputTipo==undefined || checked==undefined){
			$('#alert').css("color","#a94442");
			if(firstName==""){
				$('.first-name').addClass("has-error");
			}else{
			    $('.first-name').removeClass("has-error");
			}
			if(lastName==""){
				$('.last-name').addClass("has-error");
			}else{
			    $('.last-name').removeClass("has-error");
			}
			if(username==""){
			    $('.username-field').addClass("has-error");
			}else{
			    $('.username-field').removeClass("has-error");
			}	
			if(email==""){
				$('.email-field').addClass("has-error");
			}else{
			    $('.email-field').removeClass("has-error");
			}
			if(password1.length<8 && password1!=password2 || password1==""){
				$('.password-field').addClass("has-error");
				$('#disscard').show();
				$('#disscard').css("color","#a94442");
				$('#correct').hide();
			}else{
			    $('.password-field').removeClass("has-error");
				$('#disscard').hide();
				$('#correct').show();
			}
			if(inputTipo==undefined){
				$('.radio').css("color","#a94442");
			}else{
				$('.radio').css("color","#000");
			}
			if ( checked==undefined){
				alert('You should read and accept the Terms of Service and Privacy Policy');
			}
		
		}else{
			Accounts.createUser({username:username, email:email,profile:{firstName:firstName, lastName:lastName,role:inputTipo,accepted:checked},
			password:password1,});
			$('#signUp')[0].reset();
			$('#signupModal').modal('hide');
		}
	
  }
});