const express = require('express')
const lib = require('./src/librairy_serveur')

const app = express()
const port = 3000

app.use(express.static('public')) 

// format attendu des données-formulaire
app.use(express.urlencoded({ extended: true }))

// lancement du serveur
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/post-cv', (req, res) => {
  res.send(lib.AfficheDataCv(req.body))
})

