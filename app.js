const express     = require('express');
const path        = require('path');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const passport    = require('passport');
const users       = require('./routes/users');
const config      = require('./config/database');


const port        = 3000;

const app         = express();

mongoose.connect(config.database, (err) =>{
    if(err) throw err;
    console.log("Connected to "+ config.database);
});

// MIDDLEWARES....
app.use(cors());
app.use(bodyParser.json( ));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users',users);

//SET STATIC FOLDERS..
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) =>{
    res.send("Hello World");
});


app.listen(port,()=>{
    console.log("Server is running on port " +port);
});


