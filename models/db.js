const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://geeeen:<password>@cluster0.4aege.mongodb.net/test', {useNewUrlParser: true }, (err)=> 
{ 
if (!err) { console.log('MongoDb Connection Succesful') }
else {console.log('Error in db connection' + err )};
});