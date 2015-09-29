var express = require('express');


/* Setup server
 ---------------------------------------------------------------------------------------------------------*/
var app = express();

app.use('/app', express.static(__dirname + '/app'));





app.get('*', function(req, res){
	res.sendFile(__dirname + '/app/index.html');
});


/* Start server
 ---------------------------------------------------------------------------------------------------------*/
app.listen(9000, function () {

    console.log('Server ready to accept incoming connections')

});