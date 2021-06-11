const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    links: [{ type: Types.ObjectId, ref: 'Link' }],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

module.exports = model('User', schema)