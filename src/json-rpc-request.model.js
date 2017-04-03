"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var JsonRpcRequest = (function () {
    function JsonRpcRequest(config) {
        this.jsonrpc = '2.0';
        this.method = '';
        this.params = null;
        this.id = undefined;
        if (config) {
            if (config.method !== '')
                this.method = config.method;
            if (config.params !== undefined)
                this.params = config.params;
            if (config.id !== undefined)
                this.id = config.id;
        }
    }
    ;
    return JsonRpcRequest;
}());
exports.JsonRpcRequest = JsonRpcRequest;
;
