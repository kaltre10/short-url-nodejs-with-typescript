"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
const getShort = (id) => {
    const short = model_1.default.findOne({ _id: id });
    return short;
};
const getShorts = (user) => {
    const urlShorts = model_1.default.find({ user });
    console.log(urlShorts);
    return urlShorts;
};
const insertShort = (user, url, urlShort) => {
    const insertShort = model_1.default.create({ user, url, urlShort });
    return insertShort;
};
const updateShort = (id, url, urlShort) => {
    const short = model_1.default.findOneAndUpdate({ _id: id }, { url, urlShort }, { new: true });
    return short;
};
const deleteShort = (id) => {
    const short = model_1.default.findOneAndDelete({ _id: id });
    return short;
};
exports.default = {
    getShorts,
    insertShort,
    updateShort,
    deleteShort,
};
