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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterNumberBlacklistRule = void 0;
const rules_abstract_1 = require("../rules/rules.abstract");
const rule_enum_1 = require("../types/rule.enum");
const blacklist_service_1 = require("../services/blacklist.service");
class RegisterNumberBlacklistRule extends rules_abstract_1.RulesAbstract {
    checkRule(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            const isBlackListed = yield blacklist_service_1.BlacklistService.checkVehicle(offer.vehicle.registerNumber);
            return !isBlackListed;
        });
    }
    getRuleName() {
        return rule_enum_1.Rules.REGISTER_NUMBER_BLACKLIST_RULE;
    }
}
exports.RegisterNumberBlacklistRule = RegisterNumberBlacklistRule;
//# sourceMappingURL=register.number.blacklist.rule.js.map