import { RulesAbstract } from "../rules/rules.abstract";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";
import {BlacklistService} from "../services/blacklist.service";

export class RegisterNumberBlacklistRule extends RulesAbstract {
    async checkRule(offer: IOffer): Promise<boolean> {
        const isBlackListed = await BlacklistService.checkVehicle(offer.vehicle.registerNumber);
        return !isBlackListed;
    }

    getRuleName(): Rules {
        return Rules.REGISTER_NUMBER_BLACKLIST_RULE;
    }

}
