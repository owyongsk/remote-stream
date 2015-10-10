Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('logs'); },
});
Router.route('/', {name: 'index'});
Router.route('/logs', {name: 'logsList'});
