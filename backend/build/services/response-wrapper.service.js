"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseWrapperService {
    wrapOk(payload) {
        return {
            status: 'ok',
            data: payload
        };
    }
    wrapException(error) {
        return {
            status: 'error',
            message: error.message,
            typeId: error.typeId
        };
    }
}
exports.ResponseWrapperService = ResponseWrapperService;
//# sourceMappingURL=response-wrapper.service.js.map