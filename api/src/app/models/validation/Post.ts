// tslint:disable-next-line:no-var-requires
const Joi = require('joi');
// tslint:disable-next-line:no-var-requires
Joi.objectId = require('joi-objectid')(Joi);


const objectSchema = Joi.object({
    TYPE: Joi.string().trim().label('media type'),
    FILE_NAME: Joi.string().trim().label('media file url name'),
    SIGNED_PUT_URL: Joi.string().trim().label('media signed put url'),
    IMG_URL: Joi.string().trim().label('media image url'),
    ACTUAL_NAME: Joi.string().trim().label('media actual file name')
});

const arraySchema = Joi.array().items(objectSchema);

const PostValidate = {
    POST_COMMENT: {
        DESCRIPTION: Joi.string().trim().label('description'),
        USER_ID: Joi.objectId().label('user id')
    },
    POST_COVER: {
        TYPE: Joi.string().trim().label('post cover type'),
        URL: Joi.string().trim().label('cover url')
    },
    POST_CREATOR: Joi.objectId().label('creator id'),
    POST_DESCRIPTION: Joi.string().trim().label('description'),
    POST_LIKE: {
        USER_ID: Joi.objectId().label('user id'),
    },
    POST_DISLIKE: {
        USER_ID: Joi.objectId().label('user id'),
    },
    POST_MEDIA: Joi.alternatives().try(objectSchema, arraySchema),
    POST_TYPE: Joi.number().integer().label('post type')
};

export {PostValidate} ;