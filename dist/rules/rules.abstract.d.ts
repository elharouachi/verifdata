import { IOffer } from "../types/offre";
import { Rules } from "../types/rule.enum";
export declare abstract class RulesAbstract {
    abstract getRuleName(): Rules;
    abstract checkRule(offer: IOffer): Promise<boolean>;
}
