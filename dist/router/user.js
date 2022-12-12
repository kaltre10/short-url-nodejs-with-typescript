"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../components/users/controller"));
const route = (0, express_1.Router)();
route.post('/login', controller_1.default.login);
route.post('/register', controller_1.default.register);
exports.default = route;
