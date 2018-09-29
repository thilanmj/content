import {ApiController} from './ApiController';
import {Request, Response} from 'express';
import {PostService} from '../services/PostService';

export class PostController extends ApiController {

    constructor() {
        super();
    }


    public createPost(req: Request, res: Response) {
        try {
            return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public updatePost(req: Request, res: Response) {

    }

    public deletePost(req: Request, res: Response) {

    }

    public viewPost(req: Request, res: Response) {
        try {
            return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }

    }

    public addPostComment(req: Request, res: Response) {

    }

    public updatePostComment(req: Request, res: Response) {

    }

    public deletePostComment(req: Request, res: Response) {

    }

    public addPostlike(req: Request, res: Response) {

    }

    public removePostLike(req: Request, res: Response) {

    }

    public sharePost(req: Request, res: Response) {

    }

}