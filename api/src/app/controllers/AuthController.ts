import {ApiController} from './ApiController';
import {UserService} from '../services/UserService';
import {AuthService} from '../services/AuthService';

export class AuthController extends ApiController {

    constructor() {
        super();
    }

    public signIn(req: Request, res: Response) {
        try {
            return new AuthService().singIn(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public signupWithGoogle(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public signupWithFaceBook(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public signupWithTweeter(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public resendActivationEmail(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public resetPasswordEmail(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

    public resetPasswordTokenValidate(req: Request, res: Response) {
        try {
            //return new PostService().viewPost(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }

}
