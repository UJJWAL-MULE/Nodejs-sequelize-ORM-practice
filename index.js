const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
require('./models');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`);
})