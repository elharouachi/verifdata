import { RulesAbstract } from "../rules/rules.abstract";
import config  from "../config";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";

export class FirstNameLengthRule extends RulesAbstract {

    async checkRule(offer: IOffer): Promise<boolean> {
        return offer.contacts.firstName.length > config.get('rules.firstName.minLength');
    }

    getRuleName(): Rules {
        return Rules.FIRSTNAME_LENGTH_RULE;
    }

}
