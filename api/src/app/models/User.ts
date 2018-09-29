import * as bcrypt from 'bcrypt-nodejs';
import {Document, model, Model, Schema} from 'mongoose';
import {IUser} from '../interfaces/IUser';
import {Authentication} from '../../utils/Authentication';

export interface UserInterface extends IUser, Document {

}

const UserSchema: Schema = new Schema({
    FIRST_NAME: {
        type: String,
        trim: true,
        max: 200,
        required: true
    },
    LAST_NAME: {
        type: String,
        trim: true,
        max: 200,
        default: ''
    },
    EMAIL: {
        type: String,
        trim: true,
        unique: true,
        max: 100,
        required: true
    },
    PASSWORD: {
        type: String,
        trim: true,
        default: '',
        required: true
    },
    MEMBER_TYPE: {
        // 1 = Admin, 2 = User, 3 = Editor , 3 = Manager , 4 = Content-uploder
        type: Number,
    },
    CITY: {
        type: String,
        trim: true,
        default: '',
        max: 100,
    },
    COUNTRY: {
        type: String,
        trim: true,
        default: '',
        max: 100,
    },
    PHOTO: {
        type: String,
        default: '',
        max: 200
    },
    SOCIAL_MEDIA: {
        TWITTER: {
            type: String,
            trim: true,
            default: '',
            max: 200
        },
        LINKEDIN: {
            type: String,
            trim: true,
            default: '',
            max: 200
        },
        FACEBOOK: {
            type: String,
            trim: true,
            default: '',
            max: 200
        },
        INSTAGRAM: {
            type: String,
            trim: true,
            default: '',
            max: 200
        }
    },
    TOKEN: {
        type: String,
        trim: true,
        default: ''
    },
    PASSWORD_RESET_TOKEN: {
        type: String,
        trim: true,
        default: ''
    },
    IS_PASSWORD_RESET: {
        type: Boolean,
        default: false
    },
    ACTIVATION_TOKEN: {
        type: String,
        trim: true,
        default: ''
    },
    IS_ACTIVE: {
        type: Boolean,
        default: false
    },
    CREATEDAT: {
        type: Date,
        default: Date.now
    },
    UPDATEDAT: {
        type: Date,
        default: Date.now
    },
});

UserSchema.methods.comparePassword = function (candidatePassword: string, callback: any) {
    const user = this;
    // tslint:disable-next-line:only-arrow-functions
    bcrypt.compare(candidatePassword, user.PASSWORD, function (err: any, isMatch: boolean) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

UserSchema.pre('save', function (next: any) {
    const user = this;
    const Auth = new Authentication();
    // tslint:disable-next-line:only-arrow-functions
    bcrypt.genSalt(10, function (err: any, salt: string) {
        if (err) {
            return next(err);
        }
        // tslint:disable-next-line:only-arrow-functions
        bcrypt.hash(user.PASSWORD, salt, null, function (errBcrypt: any, hash: string) {
            if (errBcrypt) {
                return next(errBcrypt);
            }
            user.PASSWORD = hash;
            user.TOKEN = Auth.generateToken(user);
            user.ACTIVATION_TOKEN = Auth.generateActivationToken(user);
            next();
        });
    });
});
export const User: Model<UserInterface> = model<UserInterface>('users', UserSchema);
export default User;