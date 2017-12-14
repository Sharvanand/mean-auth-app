const express     = require('express');
const path        = require('path');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const passport    = require('passport');
const users       = require('./routes/users');
const config      = require('./config/database');


const port        = 3000;
//Express function..
const app         = express();

mongoose.Promise = global.Promise;

// Database connection...
mongoose.connect(config.database, (err) =>{
    if(err) throw err;
    console.log("Connected to "+ config.database);
});

// Middlewares....
app.use(cors());
app.use(bodyParser.json( ));
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/users',users);

//Set static folders..
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) =>{
    res.send("Hello World");
});

// Listening to port...
app.listen(port,()=>{
    console.log("Server is running on port " +port);
});


