import {Router} from 'express';
import {PostController} from '../app/controllers/PostController';
import {UserController} from '../app/controllers/UserController';

export class UserRouter {

    public router: Router;
    public userController: any;

    // public PermissionServices: PermissionServices;

    constructor() {
        this.userController = new UserController();
        this.router = Router();
        this.routes();
    }

    // set up our routes
    public routes() {
        this.router.post('/signup', this.userController.singUp);
        /*this.router.get('/:postId', this.userController.viewPost);
        this.router.post('/', this.userController.createPost);*/

        // Passport.use(new PassportOneSessionPerUser());

        /*const requireAuthentication = Passport.authenticate('jwt', {
            session: false
        });*/

        /*this.PostController = new PostController();
        this.PermissionServices = new PermissionServices();

        this.router.get('/:postId', requireAuthentication, this.PostController.viewPost);
        this.router.post('/', requireAuthentication, this.PostController.create);
        this.router.put('/:postId', requireAuthentication, this.PermissionServices.admin, this.PostController.update);
        this.router.post('/fetchAdminPosts', requireAuthentication, this.PermissionServices.admin, this.PostController.fetchAdminPosts);
        this.router.post('/adminPostCount', requireAuthentication, this.PermissionServices.admin, this.PostController.adminPostCount);
        this.router.delete('/:postId', requireAuthentication, this.PermissionServices.admin, this.PostController.delete);
        this.router.put('/archive/:postId', requireAuthentication, this.PostController.archive);
        this.router.post('/scrapeData', this.PostController.scrapeData);
        this.router.get('/fetchPostsForNewsFeed/:userId/:skip/:limit', requireAuthentication, this.PermissionServices.idMatch, this.PostController.fetchPostsForNewsFeed);
        this.router.put('/postLikeStatus/:postId', requireAuthentication, this.PostController.postLikeStatus);
        this.router.get('/newsFeedCount/:userId', requireAuthentication, this.PostController.NewsFeedCount);
        this.router.post('/postComments/:postId', requireAuthentication, this.PostController.fetchPostComments);
        this.router.put('/createPostComment/:postId', requireAuthentication, this.PostController.createPostComment);
        this.router.put('/deletePostComment/:postId', requireAuthentication, this.PostController.deletePostComment);
        this.router.put('/postCommentLikeStatus/:postId', requireAuthentication, this.PostController.postCommentLikeStatus);*/

    }

}

export default new UserRouter().router;

