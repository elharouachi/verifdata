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
exports.AlphaRateRule = void 0;
const rules_abstract_1 = require("../rules/rules.abstract");
const rule_enum_1 = require("../types/rule.enum");
const config_1 = __importDefault(require("../config"));
class AlphaRateRule extends rules_abstract_1.RulesAbstract {
    checkRule(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(offer.contacts);
            const { contacts: { email } } = offer;
            const [emailFirstPart] = email.split('@');
            if (!emailFirstPart) {
                return false;
            }
            const emailAlphaCount = emailFirstPart.replace(/\d+/g, '').length;
            return (emailAlphaCount / emailFirstPart.length) >= config_1.default.get('rules.email.minAlphaRate') / 100;
        });
    }
    getRuleName() {
        return rule_enum_1.Rules.ALPHA_RATE_RULE;
    }
}
exports.AlphaRateRule = AlphaRateRule;
//# sourceMappingURL=alpha.rate.rule.js.map