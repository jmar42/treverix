//Publications
//Users
Meteor.publish("allUsers", function() {
    var cursor = Meteor.users.find({});
    return cursor;
});
Meteor.users.allow({
        "update": function (userId, doc) {
            return true; 
        }
    });
Meteor.users.allow({
        "remove": function (userId, doc) {
            return true; 
        }
    });
Meteor.users.allow({
        "insert": function (userId, doc) {
            return true; 
        }
    });
//