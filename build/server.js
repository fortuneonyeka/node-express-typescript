"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shutdown = exports.Main = exports.httpServer = exports.app = void 0;
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const loggingHandler_1 = require("./middleware/loggingHandler");
const corsHandler_1 = require("./middleware/corsHandler");
const routeNotFound_1 = require("./middleware/routeNotFound");
const config_1 = require("./config/config");
exports.app = (0, express_1.default)();
const Main = () => {
    console.log(`------------------`);
    console.log(`Initializing`);
    console.log(`------------------`);
    exports.app.use(express_1.default.urlencoded({ extended: true }));
    exports.app.use(express_1.default.json());
    console.log(`------------------`);
    console.log(`Logging & Configuration`);
    console.log(`------------------`);
    exports.app.use(loggingHandler_1.loggingHandler);
    exports.app.use(corsHandler_1.corsHandler);
    console.log(`------------------`);
    console.log(`Define Controler Routing`);
    console.log(`------------------`);
    exports.app.get('/main/healthcheck', (req, res, next) => {
        return res.status(200).json({ message: 'hello world' });
    });
    console.log(`------------------`);
    console.log(`Define Controler Routing`);
    console.log(`------------------`);
    exports.app.use(routeNotFound_1.routeNotFound);
    console.log(`------------------`);
    console.log(`Start Server`);
    console.log(`------------------`);
    exports.httpServer = http_1.default.createServer(exports.app);
    exports.httpServer.listen(config_1.SERVER.SERVER_PORT, () => {
        console.log(`------------------`);
        console.log(`Sever Started @: ${config_1.SERVER_HOSTNAME}:${config_1.SERVER_PORT}`);
        console.log(`------------------`);
    });
};
exports.Main = Main;
const Shutdown = (callback) => exports.httpServer && exports.httpServer.close(callback);
exports.Shutdown = Shutdown;
(0, exports.Main)();
