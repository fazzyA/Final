const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const registerRoute  = require('./routes/api/Register.js')
const serviceRoute  = require('./routes/api/Service.js')
const welfareRoute  = require('./routes/api/Welfare.js')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000
///connect to db
dbConnect();
///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

///Routes
app.use('/api/register', registerRoute)
app.use('/api/service', serviceRoute)
app.use('/api/welfare', welfareRoute)

