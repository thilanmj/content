import {PostRepository} from '../repositories/PostRepository';
import {Request, Response} from 'express';

export class PostService {
    private postRepository: any;

    constructor() {
        this.postRepository = new PostRepository();
    }

    public createPost(req: Request, res: Response) {
        return this.postRepository.createPost(req, res);
    }

    /*public updatePost(req: Request, res: Response) {
        return this.postRepository.updatePost(req, res);
    }

    public deletePost(req: Request, res: Response) {
        return this.postRepository.deletePost(req, res);
    }*/

    public viewPost(req: Request, res: Response) {
        return this.postRepository.viewPost(req, res);
    }

    /*public addPostComment(req: Request, res: Response) {
        return this.postRepository.addPostComment(req, res);
    }

    public updatePostComment(req: Request, res: Response) {
        return this.postRepository.updatePostComment(req, res);
    }

    public deletePostComment(req: Request, res: Response) {
        return this.postRepository.deletePostComment(req, res);
    }

    public addPostlike(req: Request, res: Response) {
        return this.postRepository.addPostlike(req, res);
    }

    public removePostLike(req: Request, res: Response) {
        return this.postRepository.removePostLike(req, res);
    }

    public sharePost(req: Request, res: Response) {
        return this.postRepository.sharePost(req, res);
    }*/


}