const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const opts = { toJSON: { virtuals: true } };

const ResortSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    location: String,

}, opts);


ResortSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/resorts/${this._id}">${this.title}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`
});



module.exports = mongoose.model('Resort', ResortSchema);