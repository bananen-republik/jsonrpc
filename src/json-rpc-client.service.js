"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var json_rpc_response_model_1 = require("./json-rpc-response.model");
require("rxjs/add/operator/map");
require("rxjs/add/operator/take");
var JsonRpcClientService = (function () {
    /**
     * Constructor
     * @param $http {Http} - injects Angular Http service
     */
    function JsonRpcClientService($http) {
        this.$http = $http;
        this.response = null;
    }
    ;
    /**
     * Send request to remote server
     * @param request {JsonRpcRequestIntarface} - Request options
     * @returns {Observable<T>}
     */
    JsonRpcClientService.prototype.request = function (request) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.$http.post('dsd', request, options)
            .map(function (response) {
            var body = response.json();
            _this.response = new json_rpc_response_model_1.JsonRpcResponse(body);
            console.info(_this.response);
            return _this.response;
        })
            .take(1);
    };
    ;
    /**
     * Send batch of requests to server
     * @param requests {JsonRpcRequest[]} - array of requests
     * @returns {Observable<T>}
     */
    JsonRpcClientService.prototype.batch = function (requests) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = http_1.RequestOptions({ headers: headers });
        return this.$http.post('ddd', requests, options)
            .map(function (response) {
            var body = response.json();
            var length = body.length;
            var result = [];
            for (var i = 0; i < length; i++) {
                var jsonRpcResponse = new json_rpc_response_model_1.JsonRpcResponse(body[i]);
                result.push(jsonRpcResponse);
            }
            return result;
        })
            .take(1);
    };
    ;
    /**
     * Returns the last response
     * @returns {JsonRpcResponse|null}
     */
    JsonRpcClientService.prototype.response = function () {
        return this.response;
    };
    ;
    return JsonRpcClientService;
}());
JsonRpcClientService = __decorate([
    core_1.Injectable()
], JsonRpcClientService);
exports.JsonRpcClientService = JsonRpcClientService;
;
