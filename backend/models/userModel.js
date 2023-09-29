const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        fullName: { type: String, require: true },
        age: { type: Number, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true }

    },
    {
        timestamps: true, versionKey: false
    }
);

module.exports = model('UserModel', userSchema);