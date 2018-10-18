var postgresql = require('pg');
var chaineDeConnection = 'postgres://postgres:test@localhost:5432/bergerie';
var client = new postgresql.Client(chaineDeConnection);
client.connect();
console.log(client);
var listeMoutonBase = client.query('select * from mouton');
console.log(listeMoutonBase);
