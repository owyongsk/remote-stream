var logsData = Logs.find({}, {sort: {createdAt: -1}});

Template.logsList.helpers({
  logs: logsData,
});

Template.registerHelper('formatDate', function(date, format){
  //console.log(date);
  return moment(date).format(format);
});
