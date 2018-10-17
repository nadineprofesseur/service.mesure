var http = require('http');
var serveur = http.createServer(
	function(requete, reponse) 
	{
		var data = '';
		requete.on('data', 
			function(message) 
			{
				data += message;
			}
		).on('end', 
			function() 
			{
				console.log('POST data: %s', data);
			}
		);
		
		reponse.end('Donnees recues');
	}
);
serveur.listen(8080);


