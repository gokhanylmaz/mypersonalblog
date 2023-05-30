const mongoose = require('mongoose');

const { Schema } = mongoose;

const gonderiSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

const Gonderi = mongoose.model('Gonderiler', gonderiSchema);

module.exports = Gonderi;