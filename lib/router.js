Router.configure({
    layoutTemplate: 'layout',
});
Router.route('/', {name: 'index'});
Router.route('/logs', {name: 'logsList'});
