//On Rendered
Template.signUpForm.onRendered (function(){
	$('#disscard').hide();
});
//Helpers
Template.signUpForm.helpers({
});
//Events
Template.signUpForm.events({ 
  'click .signLNKD': function(){
	  $('#signWithEmail1').html(''); //Delete the fields of the form
	  $('#signWithEmail2').html(''); //Delete the fields of the form
	  $('.signLNKD').css("width","100%"); //Full linkedin
	  $('.signFB').hide(); //Hide facebook button
	  $('.signTW').hide(); //Hide twitter button
	  Session.set('LNKD',true);
	  Session.set('FB',false);
	  Session.set('TW',false);
  },
  'click .signFB': function(){
	  $('#signWithEmail1').html(''); //Delete the fields of the form
	  $('#signWithEmail2').html(''); //Delete the fields of the form
	  $('.signFB').css("width","100%"); //Full facebook
	  $('.signLNKD').hide(); //Hide linkedin button
	  $('.signTW').hide(); //Hide twitter button
	  Session.set('LNKD',false);
	  Session.set('FB',true);
	  Session.set('TW',false);
	  
  },
  'click .signTW': function(){
	  $('#signWithEmail1').html(''); //Delete the fields of the form
	  $('#signWithEmail2').html(''); //Delete the fields of the form
	  $('.signTW').css("width","100%"); //Full twitter
	  $('.signLNKD').hide(); //Hide linkedin button
	  $('.signFB').hide(); //Hide facebook button
	  Session.set('LNKD',false);
	  Session.set('FB',false);
	  Session.set('TW',true);
  },
  'submit #signUp': function(e) { 
    e.preventDefault();
	//Join date.
		d= new Date();
		h= {d:"" +d.getDate(), m:"" + (d.getMonth()+1),y:""+ d.getFullYear(),h:""+d.getHours(),i:""+d.getMinutes()};
	    joined = h.m +'-'+h.d+'-'+h.y;
	//LinkedIn selected as login service.
	if(Session.get('LNKD')==true){
		checked=$('#checkbox:checked').val();
		username=$('#username').val();
		inputTipo="";
	    var llorar= $('[name="role"]');
            for(var i=0; i<llorar.length; i++) {
				if (llorar[i].checked==true) {
                inputTipo = llorar[i].value;
				}		
            }
		if(inputTipo=="" || checked==undefined || username==""){
			if(inputTipo==""){
				Bert.alert( 'You should select a rol', 'danger', 'fixed-top');
			}
			if ( checked==undefined){
				Bert.alert( 'You should read and accept the Terms of Service and Privacy Policy', 'danger', 'fixed-top');
			}
			if(username==""){
			    $('.username-field').addClass("has-error");
			}else{
			    $('.username-field').removeClass("has-error");
			}
		}else{
		    setTimeout(function(){
                if (Meteor.user()) {
                Bert.alert( 'Session already open', 'danger', 'fixed-top');
                }else{
                Meteor.loginWithLinkedin();
                }
		        Session.set('inputTipo',inputTipo);
				Session.set('username',username);
				Session.set('joined',joined);
		        $('#signupModal').modal('hide');
            },800); 
		}
	};
	//Facebook selected as login service.
	if(Session.get('FB')==true){
		checked=$('#checkbox:checked').val();
		username=$('#username').val();
		inputTipo="";
	    var llorar= $('[name="role"]');
            for(var i=0; i<llorar.length; i++) {
				if (llorar[i].checked==true) {
                inputTipo = llorar[i].value;
				}		
            }
		if(inputTipo=="" || checked==undefined || username==""){
			if(inputTipo==""){
				Bert.alert( 'You should select a rol', 'danger', 'fixed-top');
			}
			if ( checked==undefined){
				Bert.alert( 'You should read and accept the Terms of Service and Privacy Policy', 'danger', 'fixed-top');
			}
			if(username==""){
			    $('.username-field').addClass("has-error");
			}else{
			    $('.username-field').removeClass("has-error");
			}
		}else{
		    setTimeout(function(){
                if (Meteor.user()) {
                Bert.alert( 'Session already open', 'danger', 'fixed-top');
                }else{
                    Meteor.loginWithFacebook();
                }
		        Session.set('inputTipo',inputTipo);
				Session.set('username',username);
				Session.set('joined',joined);
		        $('#signupModal').modal('hide');
            },800);  
		}
	};
	//Twitter selected as login service.
	if(Session.get('TW')==true){
		checked=$('#checkbox:checked').val();
		username=$('#username').val();
		inputTipo="";
	    var llorar= $('[name="role"]');
            for(var i=0; i<llorar.length; i++) {
				if (llorar[i].checked==true) {
                inputTipo = llorar[i].value;
				}		
            }
		if(inputTipo=="" || checked==undefined || username==""){
			if(inputTipo==""){
				Bert.alert( 'You should select a rol', 'danger', 'fixed-top');
			}
			if ( checked==undefined){
				Bert.alert( 'You should read and accept the Terms of Service and Privacy Policy', 'danger', 'fixed-top');
			}
			if(username==""){
			    $('.username-field').addClass("has-error");
			}else{
			    $('.username-field').removeClass("has-error");
			}
		}else{
		    setTimeout(function(){
                if (Meteor.user()) {
                Bert.alert( 'Session already open', 'danger', 'fixed-top');
                }else{
                    Meteor.loginWithTwitter();
                }
		        Session.set('inputTipo',inputTipo);
				Session.set('username',username);
				Session.set('joined',joined);
		        $('#signupModal').modal('hide');
        },800); 
		}
	};
	//Email and password selected as login service.	
	if(Session.get('LNKD')!=true && Session.get('FB')!=true && Session.get('TW')!=true){
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
				Bert.alert( 'You should read and accept the Terms of Service and Privacy Policy', 'danger', 'fixed-top');
			}
		
		}else{
			Accounts.createUser({username:username, email:email,profile:{firstName:firstName, lastName:lastName, username: username, role:inputTipo, joined:joined},
			password:password1,});
			$('#signUp')[0].reset();
			$('#signupModal').modal('hide');
		}
	}
	
  }
});