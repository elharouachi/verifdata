import { RulesAbstract } from "../rules/rules.abstract";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";
import config from "../config";

export class LastNameLengthRule extends RulesAbstract {

    async checkRule(offer: IOffer): Promise<boolean> {
        return offer.contacts.firstName.length > config.get('rules.lastName.minLength');
    }

    getRuleName(): Rules {
        return Rules.LASTNAME_LENGTH_RULE;
    }

}
