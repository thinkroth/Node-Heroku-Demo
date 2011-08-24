// Require the necessary modules
var  url = require('url'),
 express = require('express'),
     //Start the server
     app = express.createServer(),
    port = process.env.PORT || 8000;

//Use Express to get all potential url paths and queries
app.get('*', function(req, res){
	//Suppress the annoying favicon.ico requests
	if (req.url === '/favicon.ico') {
		return;
	}

	//Parse the URL - uses node's build in URL module
	var urlParts = url.parse(req.url);
	console.log(urlParts);
	
	//Get the path from urlParts and remove the "/"
	var cleanPath = urlParts.href.slice(1);
	console.log('Requested path = ' + cleanPath);
	
	//Display cleanPath on the screen - not especially exciting
	res.end(cleanPath);
});

app.listen(port, function() {
	console.log('Server running on port ' + port);
});