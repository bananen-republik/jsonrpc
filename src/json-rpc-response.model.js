"use strict";
var json_rpc_error_model_1 = require("./json-rpc-error.model");
;
var JsonRpcResponse = (function () {
    function JsonRpcResponse(config) {
        this.jsonrpc = '2.0';
        if (config) {
            if (config.result !== undefined && config.error === undefined) {
                Object.defineProperty(this, 'result', {
                    configurable: true,
                    enumerable: true,
                    value: config.result
                });
            }
            if (config.error !== undefined) {
                Object.defineProperty(this, 'error', {
                    configurable: true,
                    enumerable: true,
                    value: new json_rpc_error_model_1.JsonRpcError(config.error)
                });
            }
        }
    }
    ;
    return JsonRpcResponse;
}());
exports.JsonRpcResponse = JsonRpcResponse;
;
