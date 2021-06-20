import { RulesAbstract } from "../rules/rules.abstract";
import {IOffer} from "../types/offre";
import {Rules} from "../types/rule.enum";
import {QuotationService} from "../services/quotation.service";
import config from "../config";

export class PriceQuotationRateRule extends RulesAbstract {

    async checkRule(offer: IOffer): Promise<boolean> {
        const vehicleQuotation = await QuotationService.getVehicleQuotation(offer.vehicle);
        const quotationRateInterval = config.get('rules.price.quotationRate');

        const margin = vehicleQuotation * quotationRateInterval / 100;

        return (offer.price >= vehicleQuotation - margin) &&  (offer.price <= vehicleQuotation + margin);
    }

    getRuleName(): Rules {
        return Rules.PRICE_QUOTATION_RATE_RULE;
    }

}
