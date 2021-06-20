import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";

export abstract class RulesAbstract {
    abstract getRuleName(): Rules;
    abstract checkRule(offer: IOffer): Promise<boolean>;
}
