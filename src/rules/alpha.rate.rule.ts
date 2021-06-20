import { RulesAbstract } from "../rules/rules.abstract";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";
import config from "../config";

export class AlphaRateRule extends RulesAbstract {
    async checkRule(offer: IOffer): Promise<boolean> {
        console.log(offer.contacts);
        const { contacts: { email } } =  offer;
        const [emailFirstPart] = email.split('@');
        if (!emailFirstPart) {
             return false;
        }
        const emailAlphaCount =  emailFirstPart.replace(/\d+/g, '').length;
        return (emailAlphaCount / emailFirstPart.length) >= config.get('rules.email.minAlphaRate') / 100;
    }

    getRuleName(): Rules {
        return Rules.ALPHA_RATE_RULE;
    }

}
