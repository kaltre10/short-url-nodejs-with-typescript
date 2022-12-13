import {Schema, model} from 'mongoose';

const urlShorts = new Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    urlShort: {
        type: String,
        required: true
    },
    click: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },   
}, { timestamps: true });

export default model('UrlShorts', urlShorts);