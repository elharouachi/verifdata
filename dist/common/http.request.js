"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
const request_promise_1 = __importDefault(require("request-promise"));
class HttpRequest {
    static request(options) {
        console.log(options);
        return request_promise_1.default(Object.assign(Object.assign({}, options), { json: true }));
    }
    static get(options) {
        return HttpRequest.request(Object.assign(Object.assign({}, options), { method: 'GET' }));
    }
    static post(options) {
        return HttpRequest.request(Object.assign(Object.assign({}, options), { method: 'POST' }));
    }
    static put(options) {
        return HttpRequest.request(Object.assign(Object.assign({}, options), { method: 'PUT' }));
    }
    static delete(options) {
        return HttpRequest.request(Object.assign(Object.assign({}, options), { method: 'DELETE' }));
    }
}
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=http.request.js.map