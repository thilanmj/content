import {Document, model, Model, Schema} from 'mongoose';
import {IPost} from '../interfaces/IPost';

export interface IPostModel extends IPost, Document {

}

const PostSchema: Schema = new Schema({

    POST_CREATOR: {
        type: Schema.Types.ObjectId
    },
    POST_DESCRIPTION: {
        type: String,
        max: 2000
    },
    POST_CREATED_DATE: {
        type: Date,
        default: Date.now
    },
    POST_UPDATED_DATE: {
        type: Date,
        default: Date.now
    },
    POST_MEDIA: [{
        FILE_NAME: {
            type: String,
            default: '',
            max: 1000,
        },
        TYPE: {
            type: String,
            default: '',
            max: 50,
        }
    }],
    POST_LIKED: {
        type: Boolean,
        default: false
    },
    POST_LIKE: [{
        USER_ID: {
            type: Schema.Types.ObjectId
        },
        CREATED_DATE: {
            type: Date,
            default: Date.now
        },
    }],
    POST_DISLIKE: [{
        USER_ID: {
            type: Schema.Types.ObjectId
        },
        CREATED_DATE: {
            type: Date,
            default: Date.now
        },
    }],
    POST_COMMENT: [{
        USER_ID: {
            type: Schema.Types.ObjectId
        },
        DESCRIPTION: {
            type: String,
            default: '',
            max: 1000,
        },
        POST_COMMENT_CREATED_DATE: {
            type: Date,
            default: Date.now
        },
        POST_COMMENT_UPDATED_DATE: {
            type: Date,
            default: Date.now
        },
        POST_COMMENT_LIKED: {
            type: Boolean,
            default: false
        },
        POST_COMMENT_LIKE: [{
            USER_ID: {
                type: Schema.Types.ObjectId
            },
            CREATED_DATE: {
                type: Date,
                default: Date.now
            }
        }]
    }],
    POST_TYPE: {
        // 1 = post, 2 = announcement , 3 = event, 4 = status Change
        type: Number,
    },
    POST_STATUS: {
        type: Number,
        default: 1 // 1 = active, 2 = archive
    },
    POST_COVER: {
        TYPE: {
            type: String,
            default: '',
            max: 50,
        },
        URL: {
            type: String,
            default: '',
            max: 1000,
        }
    }
});

export const Posts: Model<IPostModel> = model<IPostModel>('posts', PostSchema);
export default Posts;