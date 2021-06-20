import { IOffer } from "../types/offre";
import { FirstNameLengthRule } from "./first.name.length.rule";
import { LastNameLengthRule } from "./last.name.length.rule";
import { AlphaRateRule } from "./alpha.rate.rule";
import { NumberRateRule } from "./number.rate.rule";
import { PriceQuotationRateRule } from "./price.quotation.rate.rule";
import { RegisterNumberBlacklistRule } from "./register.number.blacklist.rule";
import { ICheckOfferResponse } from "../types/rule.engine";
export declare class RuleEngine {
    rules: (AlphaRateRule | FirstNameLengthRule | LastNameLengthRule | NumberRateRule | PriceQuotationRateRule | RegisterNumberBlacklistRule)[];
    checkOffer(offer: IOffer): Promise<ICheckOfferResponse>;
}
