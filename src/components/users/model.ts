import {Schema, model} from 'mongoose';

const users = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },   
}, { timestamps: true });

export default model('Users', users);