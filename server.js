const express = require('express')
const app = express()
const port = 3000 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const URL = "https://www.arweave.net"

app.get('/metadata/:id', (req, res) => {
    let id = req.params.id
    res.json({
      "name":"PLAIN CANVAS",
      "symbol":"PLAIN",
      "seller_fee_basis_points":1500,
      "image": URL + "/image/" + id,
      "attributes":[
        {"trait_type":"CANVAS ID","value":id}
      ],
      "properties":{
        "creators":[{"address":"Ao85BgbPP2kTxzXjbGEksbTm5TZgXrEQyBujGSoF5jhR","share":100}],
        "files":[{"uri": URL + "/image/" + id,"type":"image/png"}]
      }
    });
})

app.get('/image/:id', (req, res) => {
  let id = req.params.id
  res.sendFile(__dirname + '/PLAIN.png');
})

app.listen(process.env.PORT || port, () => {
  console.log(`PLAIN CANVAS listening`)
})