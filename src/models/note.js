const { Schema, model, Mongoose } = require('mongoose');

const noteSchema = new Schema({
    title: {typpe: String, required: true},
    desciption: {type: String, required: true},
    /* createdAt: {},
    updatedAt: {} */
}, {
    timestamps: true
})

module.exports = model('note', noteSchema);