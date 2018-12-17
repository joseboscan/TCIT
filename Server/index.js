const express = require('express');
const app = express();
const request = require('request');
const async = require('async');
const { Client } = require('pg')
var list=0;
const connectionData = {
  user: 'postgres',
  host: '',
  database: 'dbBolg',
  password: '12345',
  port: 5432,
}
//client.query("INSERT INTO public.blogs(name, description)VALUES ( 'jose', 'maria')")
var list;
const client = new Client(connectionData)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

client.connect();

app.get('/list*',(request,response)=>{
client.query("select * from blogs")
    .then(responseSql => {
          list=responseSql.rows
         if(request.query.key==='Ep0ooe44dw9bvxZvW38639MnuHfD91')
	       response.json(list);
        else
          response.json();
  	
    })
    .catch(err => {
        client.end();
        response.json('0');
 
    })
   })

app.get('/remove*',(request,response)=>{
  if(request.query.key==='Ep0ooe44dw9bvxZvW38639MnuHfD91')
  {
var query='DELETE FROM blogs WHERE "Id_Blog" ='+request.query.id
		console.log(request,'remove',request.query.id,query);
client.query(query)
    .then(responseSql => {
  			return (1);
    })
    .catch(err => {
        client.end();
        response('0');
    })
}else return 0
    })


app.get('/insert*',(request,response)=>{
      console.log(request.query.key)
if(request.query.key==='Ep0ooe44dw9bvxZvW38639MnuHfD91')
{
var query="INSERT INTO blogs(name, description) VALUES ( '"+request.query.nombre+"', '"+request.query.description+"')"
console.log(response,query);
client.query(query)
    .then(responseSql => {
			return 1;
    })
    .catch(err => {
        client.end();
        response.json('0');
        console.log("Error")
    })
  }else return 0
    })

app.listen('3200', function() {
  console.log('Servidor web escuchando en el puerto 3200');
});