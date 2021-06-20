import {IOffer} from "../types/offre";
import {FirstNameLengthRule} from "./first.name.length.rule";
import {LastNameLengthRule} from "./last.name.length.rule";
import {AlphaRateRule} from "./alpha.rate.rule";
import {NumberRateRule} from "./number.rate.rule";
import {PriceQuotationRateRule} from "./price.quotation.rate.rule";
import {RegisterNumberBlacklistRule} from "./register.number.blacklist.rule";
import {ICheckOfferResponse} from "../types/rule.engine";

export class RuleEngine {
    rules = [
        new FirstNameLengthRule(),
        new LastNameLengthRule(),
        new AlphaRateRule(),
        new NumberRateRule(),
        new PriceQuotationRateRule(),
        new RegisterNumberBlacklistRule(),
    ];

    async checkOffer(offer: IOffer): Promise<ICheckOfferResponse> {
        const unsatisfiedRules = [];
        for (const rule of this.rules) {
            const isSatisfied = await rule.checkRule(offer);
            if (!isSatisfied) {
                unsatisfiedRules.push(rule.getRuleName());
            }
        }
        return {
            reference: offer.reference,
            scam: unsatisfiedRules.length != 0,
            rules: unsatisfiedRules,
        }
    }
}
