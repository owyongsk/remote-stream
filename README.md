# Remote Stream
The goal of this project it to make remote debugging easier by:
- call the REST API to log (e.g. the state of your app)
- show the log as a live stream with filters

**This is not intended to use for production.**

# How to use
Calling the REST API.
```
  POST http://remote-stream.meteor.com/api/logs
```

The body of the POST request:
```javascript
{
	"device": USER_ID,		// The device ID of the log.
	"log": LOG_MESSAGE,		// The message to be logged.
	"severity": SEVERITY,	// The severity of the message, any of the following values: ['critical', 'error', 'warning', 'info', 'debug', 'default'],
}
```

For web browser, you can include the SDK in your code.

For example

```html
<script>
window.REMOTE_STREAM_USER = 'abc';
</script>

<script src="http://remote-stream.meteor.com/remote-stream.js"></script>

<script>
  // Print the message in local console and call the API in the background.
  console.log('Hello world');
</script>
```

To read the log, go to [http://remote-stream.meteor.com/logs](http://remote-stream.meteor.com/logs). The log will be presented as a live stream and latest log will be shown on top of the page.

# State of the project
alpha (o:

not ready for serious use. (o:
