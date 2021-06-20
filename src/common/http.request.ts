import request from 'request-promise';
export class HttpRequest {
    static request(options: request.OptionsWithUri) {
        console.log(options)
        return request({ ...options, json: true })
    }

    static get(options: request.OptionsWithUri) {
        return HttpRequest.request({ ... options, method: 'GET' })
    }

    static post(options: request.OptionsWithUri) {
        return HttpRequest.request({ ... options, method: 'POST'})
    }

    static put(options: request.OptionsWithUri) {
        return HttpRequest.request({  ... options, method: 'PUT' })
    }

    static delete(options: request.OptionsWithUri) {
        return HttpRequest.request({  ... options, method: 'DELETE'})
    }
}
