"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiController {
    sendResponse(res, message, data, success, code) {
        return res.status(code).send({
            code,
            data,
            message,
            success
        });
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=ApiController.js.map