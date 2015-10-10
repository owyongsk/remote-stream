Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('logs'); },
});
Router.route('/', {name: 'index'});
Router.route('/logs', {name: 'logsList'});
Router.route('/logs/:_id', {name: 'logDetail',data: function() {
    return Logs.findOne(this.params._id);
}});
