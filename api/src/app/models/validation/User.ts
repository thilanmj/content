// tslint:disable-next-line:no-var-requires
const Joi = require('joi');
// tslint:disable-next-line:no-var-requires
Joi.objectId = require('joi-objectid')(Joi);

const UserValidation = {
    FIRST_NAME: Joi.string().trim().required().label('first name'),
    LAST_NAME: Joi.string().trim().label('last name'),
    EMAIL: Joi.string().email().required().label('email'),
    PASSWORD: Joi.string().required().label('password'),
    MEMBER_TYPE: Joi.number().integer().min(0).max(3).required().label('member type'),
    /*PHOTO: Joi.string().trim().label('profile photo'),
    SOCIAL_MEDIA: {
        TWITTER: Joi.string().trim().label('twitter'),
        LINKEDIN: Joi.string().trim().label('linkedin'),
        FACEBOOK: Joi.string().trim().label('facebook'),
        INSTAGRAM: Joi.string().trim().label('instagram')
    },*/
    TOKEN: Joi.string().trim().label('user token'),
    //PASSWORD_RESET_TOKEN: Joi.string().trim().label('reset token'),
    //IS_PASSWORD_RESET: Joi.boolean().label('password reset'),
    ACTIVATION_TOKEN: Joi.string().trim().label('activation token'),
    //IS_ACTIVE: Joi.boolean().label('active')
};

export {UserValidation};