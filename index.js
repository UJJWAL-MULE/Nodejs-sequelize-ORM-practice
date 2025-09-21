const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const User  = require('./models/USer');
const { sequelize } = require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

sequelize.sync({force:true}).then(() => {
  console.log('Database & tables created!');
}).catch
((err) => {
  console.log(err);
} );

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`);
})