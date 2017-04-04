/**
 * JSON RPC Error interface
 */
export interface JsonRpcErrorInterface {
    code: number;       // Error code
    message: string;    // Error message
    data?: any;         // Data provided by server
};


/**
 * JSON RPC Error class
 */
export class JsonRpcError {
    code: number;           // Error code
    message: string = '';   // Error message

    constructor (config?: JsonRpcErrorInterface) {
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
    };
};