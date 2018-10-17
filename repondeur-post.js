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
                for(var position in listeChamps) // foreach particulier du js 
                {
                    champs = listeChamps[position];
                    console.log('champs ' + champs);
                    [champ,valeur] = champs.split('=');
                    //champ = champValeur[0]; //valeur = champValeur[1];
                    console.log('Apres split ' + champ + ' = ' + valeur);
                }
            
				console.log('POST data: %s', formulaire);
			}
		);
		
		reponse.end('Donnees recues');
	}
);
serveur.listen(8080);


