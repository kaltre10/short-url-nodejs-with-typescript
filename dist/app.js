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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./router"));
const dbConfig_1 = __importDefault(require("./libs/dbConfig"));
const controller_1 = __importDefault(require("./components/url/controller"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.json());
(0, dbConfig_1.default)();
app.get('/', (req, res) => res.send('Hola Mundo!!!'));
app.get('/:url', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield controller_1.default.find(req.params.url);
    const path = (url === null || url === void 0 ? void 0 : url.url) || 'https://google.com';
    res.redirect(path);
}));
app.use('/', router_1.default);
exports.default = app;
