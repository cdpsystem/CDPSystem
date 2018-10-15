'use strict'

let mongoose = require('mongoose');
let app = require('./app');

let port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cdpoffice')
	.then( ()=>{
		//Conexion realizada correctamente
		console.log("Connection with cdpoffice succesfull");
		app.listen(port,()=>{
			console.log("up -> http://localhost:"+port);
		});
	})
	.catch(err => {
		//Error no se ha podido conectar a la base de datos
		console.log(err);
	}); 