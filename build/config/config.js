"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = exports.SERVER_PORT = exports.SERVER_HOSTNAME = exports.TEST = exports.Development = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Development = process.env.MODE_ENV === "development";
exports.TEST = process.env.MODE_ENV === "test";
exports.SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
exports.SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;
exports.SERVER = {
    SERVER_HOSTNAME: exports.SERVER_HOSTNAME,
    SERVER_PORT: exports.SERVER_PORT,
};
