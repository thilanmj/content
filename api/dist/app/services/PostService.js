"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostRepository_1 = require("../repositories/PostRepository");
class PostService {
    constructor() {
        this.postRepository = new PostRepository_1.PostRepository();
    }
    viewPost(req) {
        const result = this.postRepository.viewPost(req);
        console.log(result + '============= ****************');
        return result;
    }
}
exports.PostService = PostService;
//# sourceMappingURL=PostService.js.map