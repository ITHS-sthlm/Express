//steg 1, begär att arbeta med express paketet
const express = require('express')

//Steg 2, bestäm att variabeln app ska arbeta med de olika metoderna
const app = express()

//Steg 3, Lägg portnummer i en variabel för lättare åtkomst
const port = 3000;

//Implementera< möjligheten att visa något statiskt med HTML på en särskild adress
app.use(express.static('public'))

//Hantera JSON med middleware
app.use(express.json())

//Använder middleware
app.use(express.urlencoded({extended:true}))

//Nedanför så lägger vi in våra olika metoder (GET, POST, DELETE etc)
//GET
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//POST (Obs innan kommunikation med databas, kör en logg så att ni ser att det funkar)
app.post('/', (req,res) => {
    console.log(req.body)
})

//POST med JSON
app.post('/user', (req,res) => {
    res.send(req.body.email)
})

//DELETE
app.delete('/', (res,req) => {
    res.send('Ta bort')
})

//För att få igång express servern så behöver vi ange port
app.listen(port, () => {
    console.log(`Jippe servern är igång på port: ${port}`)
})
