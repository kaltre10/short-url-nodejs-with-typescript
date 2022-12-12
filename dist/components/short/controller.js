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
const response_1 = __importDefault(require("../../network/response"));
const store_1 = __importDefault(require("./store"));
const click = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const short = yield store_1.default.click(id);
        response_1.default.success(req, res, short, 200);
    }
    catch (error) {
        response_1.default.error(req, res, error, 400);
    }
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.params;
        if (!user)
            throw 'User Invalid!';
        const urlShort = yield store_1.default.getShorts(user);
        response_1.default.success(req, res, urlShort, 200);
    }
    catch (error) {
        response_1.default.error(req, res, error, 400);
    }
});
const insertShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, url, urlShort } = req.body;
        const short = yield store_1.default.insertShort(user, url, urlShort);
        response_1.default.success(req, res, short, 200);
    }
    catch (error) {
        response_1.default.error(req, res, error, 400);
    }
});
const updateShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, url, urlShort } = req.body;
        const short = yield store_1.default.updateShort(user, url, urlShort);
        response_1.default.success(req, res, short, 200);
    }
    catch (error) {
        response_1.default.error(req, res, error, 400);
    }
});
const deleteShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id)
            throw 'User Invalid!';
        const short = yield store_1.default.deleteShort(id);
        response_1.default.success(req, res, short, 200);
    }
    catch (error) {
        response_1.default.error(req, res, error, 400);
    }
});
exports.default = {
    getAll,
    insertShort,
    updateShort,
    deleteShort,
    click
};
