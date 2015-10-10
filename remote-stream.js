Logs = new Meteor.Collection("logs");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Global API configuration
    var Api = new Restivus({
      useDefaultAuth: true,
      prettyJson: true
    });

    // Generates: POST on /api/logs and GET, DELETE /api/logs/:id for
    // Logs collection
    Api.addCollection(Logs, {
      excludedEndpoints: ['getAll', 'put'],
      routeOptions: {
        authRequired: true
      },
      endpoints: {
        post: {
          authRequired: false
        },
        delete: {
          roleRequired: 'admin'
        }
      }
    });
  });
}
