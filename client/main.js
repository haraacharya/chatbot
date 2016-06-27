import '../imports/startup/accounts-config.js';


Template.chat.helpers({
 	messages: function(){
 		//return Messages.find({}, { sort: { time: -1}});
 		return Messages.find();
 	}

 });

Template.chat.events({
  'click .clickable':function() {
    // increment the counter when button is clicked
    var message = $("#message").val();
    

    $("#message").val("");
    if (Meteor.user())
        var name = Meteor.user().username;
  	else
    	var name = 'Anonymous';

    if (message != "") {
	    Messages.insert({
	    	name: name,
	    	text: message,
	    	createdAt: new Date()
	    });
	    console.log(message);
	}
  },
});
