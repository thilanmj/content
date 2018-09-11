"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiController_1 = require("./ApiController");
const PostService_1 = require("../services/PostService");
class PostController extends ApiController_1.ApiController {
    constructor() {
        super();
    }
    viewPost(req, res) {
        try {
            const results = new PostService_1.PostService().viewPost(req.params.postId);
            console.log(results);
            super.sendResponse(res, 'VIEW POSTS', results, true, 200);
        }
        catch (ex) {
            console.log(ex.message + ' ERROR MESSAGE ==================== ');
        }
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map