import {Router} from 'express';
import {AuthController} from '../app/controllers/AuthController';

export class AuthRouter {

    public router: Router;
    public authController: any;

    constructor() {
        this.authController = new AuthController();
        this.router = Router();
        this.routes();
    }

    // set up our routes
    public routes() {
        this.router.post('/signup/google', this.authController.signupWithGoogle);
        this.router.post('/signup/facebook', this.authController.signupWithFaceBook);
        this.router.post('/signup/tweeter', this.authController.signupWithTweeter);
        this.router.post('/resendActivationEmail', this.authController.resendActivationEmail);
        this.router.post('/signin', this.authController.signIn);
        this.router.post('/reset/password', this.authController.resetPasswordEmail);
        this.router.get('/reset/token/validate/:token', this.authController.resetPasswordTokenValidate);

    }

}

export default new AuthRouter().router;

