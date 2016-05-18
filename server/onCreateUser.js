//Accounts.onCreateUser(function (options, user) {
  //Facebook login
 // if (user.services.facebook) {
 //   user.profile.firstName = user.services.facebook.first_name;
 //   user.profile.lastName = user.services.facebook.last_name;
//    user.profile.gender = user.services.facebook.gender;
 //   user.profile.email = user.services.facebook.email;
 //   user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
//  }
  //Twitter login
//  if (user.services.twitter) {
//    user.profile.screenName = user.services.twitter.screenName;
//    user.profile.picture = user.services.twitter.profile_image_url
//    var fullScreenName = user.services.twitter.screenName;

//    if (fullScreenName.indexOf(' ') === -1 && fullScreenName.indexOf('_') === -1) {
 //     user.profile.firstName  = fullScreenName;
 //   }
 //   else if (fullScreenName.indexOf(' ') >= 0) {
 //     user.profile.firstName  = fullScreenName.substring(0, fullScreenName.indexOf(' '));
 //   }
 //   else if (fullScreenName.indexOf('_') >= 0) {
 //     user.profile.firstName  = fullScreenName.substring(0, fullScreenName.indexOf('_'));
 //   }
 // }
  //Linkedin login
//  if (user.services.linkedin) {
//    user.profile.name = user.services.linkedin.firstName + ' ' + user.services.linkedin.lastName;
//    user.profile.email = user.services.linkedin.emailAddress;
//    user.profile.picture = user.services.linkedin.pictureUrl;
//  }
//  return user;
//});