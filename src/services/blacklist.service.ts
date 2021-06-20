import {HttpRequest} from "../common/http.request";
import config from "../config";

export class BlacklistService {
    static async checkVehicle(registerNumber: string): Promise<boolean> {
        if (config.get('app.useMock')) {
            return registerNumber === 'AA123AA';
        }
        return HttpRequest.get({
            uri: `${config.get('externalService.blacklist.url')}/check`,
            qs: { registerNumber }
        });;
    }
}
