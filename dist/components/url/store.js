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
const model_1 = __importDefault(require("../short/model"));
const find = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const urlOrigin = yield model_1.default.findOne({ urlShort: url });
    click(urlOrigin === null || urlOrigin === void 0 ? void 0 : urlOrigin.id, urlOrigin === null || urlOrigin === void 0 ? void 0 : urlOrigin.click);
    return urlOrigin;
});
const click = (id, click = 0) => __awaiter(void 0, void 0, void 0, function* () {
    click++;
    const shortUpdate = model_1.default.findOneAndUpdate({ _id: id }, { click }, { new: true });
    return shortUpdate;
});
exports.default = {
    find,
    click
};
