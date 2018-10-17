var http = require('http');
var serveur = http.createServer(
	function(requete, reponse) 
	{
		var formulaire = '';
		requete.on('data', 
			function(champ) 
			{
				formulaire += champ;
                //console.log('on data ' + champ);
			}
		).on('end', 
			function() 
			{
            
                listeChamps = formulaire.split('&');
                for(var position in listeChamps)
                {
                    champs = listeChamps[position];
                    console.log('champs ' + champs);    
                }
            
				console.log('POST data: %s', formulaire);
			}
		);
		
		reponse.end('Donnees recues');
	}
);
serveur.listen(8080);


