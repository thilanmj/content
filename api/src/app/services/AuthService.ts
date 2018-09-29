import {UserRepository} from '../repositories/UserRepository';

export class AuthService {
    private userRepository: any;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public singIn(req: Request, res: Response) {
        return this.userRepository.signin(req, res);
    }

}