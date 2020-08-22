const { Schema, model } = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps:true
})

// encryptPassword could be created as anything
userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt();
    return await bcryptjs.hash(password, salt);
}

userSchema.methods.matchPassword = async function(password){
    return await bcryptjs.compare(password, this.password);
}

module.exports = model('user', userSchema);