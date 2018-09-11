import { ApiController } from './ApiController';
import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

export class PostController extends ApiController {

    constructor() {
        super();
    }

    public viewPost(req: Request, res: Response): void {
        try {
            const results = new PostService().viewPost(req.params.postId);
            console.log(results);
            super.sendResponse(res, 'VIEW POSTS', results, true, 200);
        } catch (ex) {
            console.log(ex.message + ' ERROR MESSAGE ==================== ');
        }

    }
}