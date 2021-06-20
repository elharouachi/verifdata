import request from 'request-promise';
export declare class HttpRequest {
    static request(options: request.OptionsWithUri): request.RequestPromise<any>;
    static get(options: request.OptionsWithUri): request.RequestPromise<any>;
    static post(options: request.OptionsWithUri): request.RequestPromise<any>;
    static put(options: request.OptionsWithUri): request.RequestPromise<any>;
    static delete(options: request.OptionsWithUri): request.RequestPromise<any>;
}
