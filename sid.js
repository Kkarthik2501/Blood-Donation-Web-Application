const express = require('express');
var mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err)
    {
        console.log("Error in connection"+err)
    }
    else{
        console.log("Connection established Successfully")
        db = client.db('bloodbud')
    }
});


app.post('/example', (req, res) => {

  res.send(`Full name is:${req.body}`);
  console.log(" in port");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});