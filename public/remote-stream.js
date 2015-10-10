(function(){
  oldLog = console.log;
  window.console = {};
  window.console.log = function(log) {
    var r = new XMLHttpRequest();
    r.open("POST", "http://localhost:3000/api/logs", true);
    r.setRequestHeader('Content-Type', 'application/json');
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
          alert("Success: " + r.responseText);
    };
    data = {
      "device": "SIDANLA",
      "log": log
    };
    r.send(JSON.stringify(data));
    oldLog.call(this, log);
  };
})();
