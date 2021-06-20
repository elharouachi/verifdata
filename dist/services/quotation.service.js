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
exports.QuotationService = void 0;
const http_request_1 = require("../common/http.request");
const config_1 = __importDefault(require("../config"));
class QuotationService {
    static getVehicleQuotation(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            if (config_1.default.get('app.useMock')) {
                return 35000;
            }
            return http_request_1.HttpRequest.post({
                uri: `${config_1.default.get('externalService.quotation.url')}/calcule`,
                body: vehicle
            });
        });
    }
}
exports.QuotationService = QuotationService;
//# sourceMappingURL=quotation.service.js.map