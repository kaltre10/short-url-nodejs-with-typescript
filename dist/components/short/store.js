"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const updateShort = (user, url, urlShort) => {
    const short = model_1.default.findOneAndUpdate({ user }, { url, urlShort }, { new: true });
    return short;
};
const deleteShort = (id) => {
    const short = model_1.default.findOneAndDelete({ _id: id });
    return short;
};
const click = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const short = yield getShort(id);
    let click = (short === null || short === void 0 ? void 0 : short.click) || 0;
    click++;
    const shortUpdate = model_1.default.findOneAndUpdate({ _id: id }, { click }, { new: true });
    return shortUpdate;
});
exports.default = {
    getShorts,
    insertShort,
    updateShort,
    deleteShort,
    click
};
