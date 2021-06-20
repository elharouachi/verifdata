import {IVehicleInfos} from "../types/offre";
import {HttpRequest} from "../common/http.request";
import config from "../config";

export class QuotationService {
    static async getVehicleQuotation(vehicle: IVehicleInfos): Promise<number> {
        if (config.get('app.useMock')) {
            return 35000;
        }

        return HttpRequest.post({
            uri: `${config.get('externalService.quotation.url')}/calcule`,
            body: vehicle
        });
    }
}
