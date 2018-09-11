import {PostRepository} from '../repositories/PostRepository';

export class PostService {
    private postRepository: any;

    constructor() {
        this.postRepository = new PostRepository();
    }

    viewPost(req: any) {
        const result = this.postRepository.viewPost(req);
        console.log(result + '============= ****************')
        return result;
    }
}