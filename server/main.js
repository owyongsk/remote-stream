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
