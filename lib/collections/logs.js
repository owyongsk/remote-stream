Logs = new Meteor.Collection('logs');

Logs.before.insert(function (logId, log) {
  log.createdAt = Date.now();
});

Logs.before.insert(function (logId, log) {
  if (!log.severity){
    log.severity = '';
  }
});
