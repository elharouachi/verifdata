"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convict_1 = __importDefault(require("convict"));
const config_1 = __importDefault(require("./config"));
const config = convict_1.default(config_1.default);
exports.default = config;
//# sourceMappingURL=index.js.map