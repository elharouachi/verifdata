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
exports.RuleEngine = void 0;
const first_name_length_rule_1 = require("./first.name.length.rule");
const last_name_length_rule_1 = require("./last.name.length.rule");
const alpha_rate_rule_1 = require("./alpha.rate.rule");
const number_rate_rule_1 = require("./number.rate.rule");
const price_quotation_rate_rule_1 = require("./price.quotation.rate.rule");
const register_number_blacklist_rule_1 = require("./register.number.blacklist.rule");
class RuleEngine {
    constructor() {
        this.rules = [
            new first_name_length_rule_1.FirstNameLengthRule(),
            new last_name_length_rule_1.LastNameLengthRule(),
            new alpha_rate_rule_1.AlphaRateRule(),
            new number_rate_rule_1.NumberRateRule(),
            new price_quotation_rate_rule_1.PriceQuotationRateRule(),
            new register_number_blacklist_rule_1.RegisterNumberBlacklistRule(),
        ];
    }
    checkOffer(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            const unsatisfiedRules = [];
            for (const rule of this.rules) {
                const isSatisfied = yield rule.checkRule(offer);
                if (!isSatisfied) {
                    unsatisfiedRules.push(rule.getRuleName());
                }
            }
            return {
                reference: offer.reference,
                scam: unsatisfiedRules.length != 0,
                rules: unsatisfiedRules,
            };
        });
    }
}
exports.RuleEngine = RuleEngine;
//# sourceMappingURL=rule.engine.js.map