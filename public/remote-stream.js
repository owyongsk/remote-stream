console.log = (function() {
    var log = console.log;

    return function(data) {
        var r = new XMLHttpRequest();
         r.open("POST", "http://localhost:3000/api/logs", true);
         r.setRequestHeader('Content-Type', 'application/json');
         r.onreadystatechange = function () {
             if (r.readyState != 4 || r.status != 200) return;
               alert("Success: " + r.responseText);
         };
         data = {
           "device": "SIDANLA",
           "log": data
         };
         r.send(JSON.stringify(data));
         log.call(console, data);
    };
})();

