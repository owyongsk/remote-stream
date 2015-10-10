var logsData = Logs.find();

Template.logsList.helpers({
  logs: logsData,
});
