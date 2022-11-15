const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autopartSchema = Schema({
    part_name: { type: String, required: true },
    value: { type: Number },
    img: { type: String },
    supplier: { type: String , required: true},

})

const Autopart = mongoose.model('Autopart', autopartSchema);
module.exports = Autopart;
