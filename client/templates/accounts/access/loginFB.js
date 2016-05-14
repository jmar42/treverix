Template.loginFB.events({ 
    'click #loginFB': function(e) { 
        setTimeout(function(){
            if (Meteor.user()) {
            alert('Ya se encuentra una sesión abierta');
            }else{
                Meteor.loginWithFacebook();
            }
        },800); 
    }
});