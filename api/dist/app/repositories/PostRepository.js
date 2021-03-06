"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../models/Post");
const mongoose_1 = require("mongoose");
class PostRepository {
    constructor() {
    }
    viewPost(postId) {
        const query = Post_1.Posts.aggregate([
            {
                $match: {
                    _id: mongoose_1.Types.ObjectId(postId),
                }
            },
            {
                $project: {
                    POST_COVER: '$POST_COVER',
                    POST_CREATOR: {
                        _id: '$SYSTEM_USER._id',
                        FIRST_NAME: '$SYSTEM_USER.FIRST_NAME',
                        LAST_NAME: '$SYSTEM_USER.LAST_NAME',
                        COMPANY_NAME: '$COMPANY_DETAILS.COMPANY_NAME',
                        CITY: '$SYSTEM_USER.CITY',
                        COUNTRY: '$SYSTEM_USER.COUNTRY',
                        PROFILE_PHOTO: '$SYSTEM_USER.PHOTO',
                        MEMBER_TYPE: '$SYSTEM_USER.MEMBER_TYPE',
                        JOB_TITLE: '$SYSTEM_USER.JOB_TITLE'
                    },
                    POST_DESCRIPTION: '$POST_DESCRIPTION',
                    POST_MEDIA: '$POST_MEDIA',
                    POST_TYPE: '$POST_TYPE',
                    POST_CREATED_DATE: '$POST_CREATED_DATE',
                    POST_UPDATED_DATE: '$POST_UPDATED_DATE',
                    LIKE_COUNT: { $size: '$POST_LIKE' },
                    COMMENT_COUNT: { $size: '$POST_COMMENT' },
                    POST_LIKED: '$POST_LIKED',
                    POST_LIKE: '$POST_LIKE'
                }
            }
        ]);
        return query.find();
        /*const promise = query.exec((err, result) => {
             if (err) {
                 return err;
             } else if (result.length > 0) {
                 return result.entries();
             }
         });
 
 
        return promise;*/
    }
}
exports.PostRepository = PostRepository;
//# sourceMappingURL=PostRepository.js.map