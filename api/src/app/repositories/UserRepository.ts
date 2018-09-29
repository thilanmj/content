import * as  Joi from 'joi';
import {Request, Response} from 'express';
import {UserValidation} from '../models/validation/User';
import {User} from '../models/User';
import {Authentication} from '../../utils/Authentication';
import * as bcrypt from 'bcrypt-nodejs';
import {ResponseMessage} from '../../configs/ResponseMessages';
import {logger} from '../services/LoggerService';

export class UserRepository {

    constructor() {
    }

    public createUser(req: Request, res: Response) {
        try {
            const signupValidate = {
                EMAIL: UserValidation.EMAIL,
                FIRST_NAME: UserValidation.FIRST_NAME,
                MEMBER_TYPE: UserValidation.MEMBER_TYPE,
                PASSWORD: UserValidation.PASSWORD,
            };

            const firstName: string = req.body.firstName;
            const lastName: string = req.body.lastName;
            const email: string = req.body.email;
            const password: string = req.body.password;
            const memberType: number = req.body.memberType;
            const agree: boolean = req.body.agree;
            Joi.validate(
                {
                    EMAIL: email,
                    FIRST_NAME: firstName,
                    MEMBER_TYPE: memberType,
                    PASSWORD: password,
                },
                signupValidate, (err, value) => {
                    if (err) {
                        //logger.error(err);
                        // main.sendResponse(res, ResponseMessage.VALIDATION_ERROR, err, false, ResponseCode.VALIDATION_ERROR);
                        // tslint:disable-next-line:triple-equals
                    } else if (lastName == '') {
                        //main.sendResponse(res, ResponseMessage.LAST_NAME, err, false, ResponseCode.VALIDATION_ERROR);
                    } else {

                        const userData = new User({
                            EMAIL: email,
                            FIRST_NAME: firstName,
                            LAST_NAME: lastName,
                            MEMBER_TYPE: memberType,
                            PASSWORD: password,
                        });

                        userData.save();
                        /*.then((user: any) => {
                            const signupEmail = {
                                address: user.EMAIL,
                                subject: 'Account Activation',
                                action: 'SIGNUP',
                                url: req.headers.origin + '/activate/' + user.ACTIVATION_TOKEN,
                                username: firstName
                            };
                            //main.sendEmail(signupEmail);

                            //main.sendResponse(res, ResponseMessage.SIGNUP_SUCCESS, result, true, ResponseCode.SUCCESS);
                        }).catch((error) => {
                        //logger.error(error);
                        // tslint:disable-next-line:triple-equals
                        if (error.code == 11000) {
                            //main.sendResponse(res, ResponseMessage.UNIQUE_EMAIL, error, false, ResponseCode.DATABASE_ERROR);
                        } else {
                            //main.sendResponse(res, ResponseMessage.DATABASE_ERROR, error, false, ResponseCode.DATABASE_ERROR);
                        }

                    });*/
                    }
                });
        } catch (error) {
            // logger.error(error);
            //main.sendResponse(res, ResponseMessage.EXCEPTION, error, false, ResponseCode.EXCEPTION);
        }
    }

    public signin(req: Request, res: Response): void {

        try {

            const email: string = req.body.email;
            const password: string = req.body.password;

            User.findOne(
                {
                    EMAIL: email
                }
            ).then((user: any) => {
                if (!user) {
                    const err = 'MISMATCH';
                    return res.status(400).send(err);
                } else {
                    bcrypt.compare(password, user.PASSWORD, (err, isMatch) => {
                        if (err) {
                            return err;
                        } else if (!isMatch) {
                            return ResponseMessage.MISMATCH_CREDENTIAL;
                        } else {

                            const Auth = new Authentication();
                            const token = Auth.generateToken(user);

                            User.update(
                                {
                                    _id: user._id
                                },
                                {
                                    $set: {
                                        TOKEN: token,
                                        UPDATEDAT: Date.now()
                                    }
                                },
                                (err1, result) => {
                                    if (err1) {
                                        logger.error(err1);
                                        return res.send(err1);
                                    } else if (result) {
                                        const data = {
                                            _id: user._id,
                                            FIRST_NAME: user.FIRST_NAME,
                                            LAST_NAME: user.LAST_NAME,
                                            TOKEN: token,
                                            MEMBER_TYPE: user.MEMBER_TYPE,
                                            EMAIL: user.EMAIL,
                                            REGISTRATION_STEP: user.REGISTRATION_STEP,
                                            CITY: user.CITY,
                                            COUNTRY: user.COUNTRY,
                                            COMPANY_ID: user.COMPANY_ID,
                                            JOB_TITLE: user.JOB_TITLE,
                                            PHOTO: user.PHOTO,
                                            SOCIAL_MEDIA: user.SOCIAL_MEDIA,
                                            CONNECTIONS: user.CONNECTIONS,
                                            EDUCATION: user.EDUCATION,
                                            GRADUATED_YEAR: user.GRADUATED_YEAR,
                                            EMPLOYEMENT_HISTORY: user.EMPLOYEMENT_HISTORY,
                                            PERSONAL_BACKGROUND: user.PERSONAL_BACKGROUND,
                                            IS_ACTIVE: user.IS_ACTIVE,
                                            CREATEDAT: user.CREATEDAT,
                                            UPDATEDAT: user.UPDATEDAT,
                                        };

                                        //logger.info(' , ' + user._id + ' logged into the application. ');

                                        return res.status(200).send(data);

                                        /*if (user.IS_ACTIVE) {
                                            main.sendResponse(res, ResponseMessage.SIGNIN_SUCCESS, data, true, ResponseCode.SUCCESS);
                                        } else {
                                            main.sendResponse(res, ResponseMessage.ACTIVATION_REQUIRED, data, true, ResponseCode.SUCCESS);
                                        }*/

                                    } else {
                                        /*logger.error(err1);
                                        main.sendResponse(res, ResponseMessage.DATABASE_ERROR, [], false, ResponseCode.DATA_MISMATCH);*/
                                    }
                                }
                            );

                        }
                    });
                }
            })
                .catch((error) => {
                    /*logger.error(error);
                    main.sendResponse(res, ResponseMessage.EXCEPTION, error, false, ResponseCode.EXCEPTION);*/
                });

        } catch (error) {
            /*logger.error(error);
            main.sendResponse(res, ResponseMessage.EXCEPTION, error, false, ResponseCode.EXCEPTION);*/
        }
    }
}