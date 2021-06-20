import { RulesAbstract } from "../rules/rules.abstract";
import { IOffer } from "../types/offre";
import { Rules } from "../types/rule.enum";
export declare class FirstNameLengthRule extends RulesAbstract {
    checkRule(offer: IOffer): Promise<boolean>;
    getRuleName(): Rules;
}
