const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autopartSchema = Schema({
    part_name: { type: String, required: true },
    // supplier: { type: String , required: true},
    // vin: { type: String, required: true},
    // date_purchased: { type: Date, required: true },
    value: { type: String },
    // img: { type: String },
})
autopartSchema.set('collection', 'parts')

const Autopart = mongoose.model('Autopart', autopartSchema);
module.exports = Autopart;
