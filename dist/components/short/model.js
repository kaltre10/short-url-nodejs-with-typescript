"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const urlShorts = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('UrlShorts', urlShorts);
