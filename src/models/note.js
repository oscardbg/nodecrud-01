const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    /* createdAt: {},
    updatedAt: {} */
}, {
    timestamps: true
})

module.exports = model('note', noteSchema);