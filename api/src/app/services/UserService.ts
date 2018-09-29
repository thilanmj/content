import {UserRepository} from '../repositories/UserRepository';

export class UserService {

    private userRepository: any;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public singUp(req: Request, res: Response) {
        return this.userRepository.createUser(req, res);
    }

}