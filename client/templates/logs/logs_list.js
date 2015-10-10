// Using Session to pass data around
// See: http://stackoverflow.com/questions/27678923/filter-collection-on-dropdownlist-change
Session.set('severity', '');
Session.set('deviceid', '');

Template.logsList.helpers({
  logs: function(){
    // Build the query from session data
    var query = {};
    var severity = Session.get('severity');
    if (severity && severity != 'default'){
      query.severity = severity;
    }

    var deviceid = Session.get('deviceid');
    if (deviceid){
      query.device = deviceid;
    }
    console.info(query);

    return Logs.find(query, {sort: {createdAt: -1}});
  },
});

// Handle UI events
Template.logsFilter.events({
  'change select[name=severity]': function(e, t){
    Session.set('severity', $(e.currentTarget).val());
    //console.info($(e.currentTarget).val());
  },
  'change input[name=deviceid]': function(e){
    Session.set('deviceid', $(e.currentTarget).val());
  },
  'submit form': function(e){
    e.preventDefault();
  },
});

// Create filter
Template.registerHelper('formatDate', function(date, format){
  //console.log(date);
  return moment(date).format(format);
});
