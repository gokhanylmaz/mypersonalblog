const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'babapro',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log('connected to db successfully');
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = conn