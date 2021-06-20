import { RulesAbstract } from "../rules/rules.abstract";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";
import config from "../config";

export class NumberRateRule extends RulesAbstract {

    async checkRule(offer: IOffer): Promise<boolean> {
        const { contacts: { email } } =  offer;
        const [emailFirstPart] = email.split('@');
        if (!emailFirstPart) {
            return false;
        }
        const emailNumbersCount =  emailFirstPart.match(/\d+/g)?.length || 0;
        return emailNumbersCount / emailFirstPart.length < config.get('rules.email.minAlphaRate') / 100;
    }

    getRuleName(): Rules {
        return Rules.NUMBER_RATE_RULE;
    }

}
