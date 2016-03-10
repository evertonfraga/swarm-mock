if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('diskSpaceAvailability', 100);
  Session.setDefault('diskSpaceUsed', 5);

  var roundingWithDecimals(num, decimals){
    var decimalsValue = Math.pow(10,decimals);
    return Math.round(num * decimalsValue);
  }

  Template.app.helpers({
    diskSpaceAvailable: function(){
      var availableSpace = Session.get('diskSpaceAvailability') - Session.get('diskSpaceUsed');
      return Math.round(availableSpace*100)/100;
    },
    diskSpaceAvailability: function(){
      return Session.get('diskSpaceAvailability');
    },
  });

  Template.app.events({
    'change input[type=range]': function(event){
      Session.set('diskSpaceAvailability', event.target.value);
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
