import jwt = require('jwt-simple');
import { UserInterface } from '../app/models/User';
import {API} from './KeyConfig';

export class Authentication {

    public generateToken(User: UserInterface): string {

        const token = jwt.encode(
            {
                time: new Date().toISOString(),
                type: '1', // authentication token,
                userType: User.MEMBER_TYPE,
                userId: User._id
            },
            API.SECRECT
        );

        return token;
    }

    public generateActivationToken(User: UserInterface): string {

        const token = jwt.encode(
            {
                time: new Date().getTime(),
                type: '2', // activation token
                userId: User._id,
                userType: User.MEMBER_TYPE,
            },
            API.SECRECT
        );

        return token;
    }

    public generatePasswordResetToken(User: UserInterface): string {

        const token = jwt.encode(
            {
                email: User.EMAIL,
                time: new Date().getTime(),
                type: '3', // password reset token
                userId: User._id,
                userType: User.MEMBER_TYPE
            },
            API.SECRECT
        );

        return token;
    }
}