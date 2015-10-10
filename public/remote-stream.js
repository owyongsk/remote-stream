if(window.REMOTE_STREAM_USER) {

  console.log = (function() {
    var log = console.log;

    return function(msg) {
        var r = new XMLHttpRequest();
         r.open("POST", "http://localhost:3000/api/logs", true);
         r.setRequestHeader('Content-Type', 'application/json');
         r.onreadystatechange = function () {
             if (r.readyState != 4 || r.status != 200) return;
               alert("Success: " + r.responseText);
         };
         data = {
           "device": window.REMOTE_STREAM_USER,
           "log": msg
         };
         r.send(JSON.stringify(data));
         log.call(console, msg);
    };
  })();

}
