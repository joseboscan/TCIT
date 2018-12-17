const { Client } = require('pg')

const connectionData = {
  user: 'postgres',
  host: '',
  database: 'dbBolg',
  password: '12345',
  port: 5432,
}
const client = new Client(connectionData)

client.connect()
client.query("INSERT INTO public.blogs(name, description)VALUES ( 'jose', 'maria')")
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
        console.log("Error")
    })