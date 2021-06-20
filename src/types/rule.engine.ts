import {Rules} from "./rule.enum";

export interface ICheckOfferResponse {
    reference: string;
    scam: boolean;
    rules: Rules[];
}
