var postgresql = require('pg');
const Query = require('pg').Query
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
async function listerMoutons()
{
	var basededonnees = new postgresql.Client(chaineDeConnection);
	await basededonnees.connect();
	//console.log('base de donnees ' + JSON.stringify(basededonnees));
	var requeteListeMoutons = new Query('select * from mouton');
	var listeMouton = await client.query(requeteListeMoutons);
	//console.log(listeMouton);
	requeteListeMoutons.on('row',function(mouton,resultat)
	{
		console.log(mouton.nom + " (" + mouton.couleur + "," 
					+ mouton.naissance + ")");	
	});
}
listerMoutons().then(console.log);