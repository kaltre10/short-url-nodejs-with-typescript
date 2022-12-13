"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../components/short/controller"));
const route = (0, express_1.Router)();
route.get('/:user', controller_1.default.getAll);
route.post('/', controller_1.default.insertShort);
route.delete('/:id', controller_1.default.deleteShort);
exports.default = route;
