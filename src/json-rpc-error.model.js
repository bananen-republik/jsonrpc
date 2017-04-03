"use strict";
;
/**
 * JSON RPC Error Class
 */
var JsonRpcError = (function () {
    function JsonRpcError(config) {
        this.message = ''; // Error message
        if (config) {
            this.code = config.code;
            this.message = config.message;
            if (config.data !== undefined) {
                Object.defineProperty(this, 'data', {
                    configurable: true,
                    enumerable: true,
                    value: config.data
                });
            }
        }
    }
    ;
    return JsonRpcError;
}());
exports.JsonRpcError = JsonRpcError;
;
