import {ApiController} from './ApiController';
import {UserService} from '../services/UserService';

export class UserController extends ApiController {

    constructor() {
        super();
    }


    public singUp(req: Request, res: Response) {
        try {
            return new UserService().singUp(req, res);
        } catch (ex) {
            console.log(ex.message);
        }
    }
}