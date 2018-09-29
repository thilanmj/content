import {IPostModel, Posts} from '../models/Post';
import {Request, Response} from 'express';
import {PostValidate} from '../models/validation/Post';
import {Types} from 'mongoose';
import * as  Joi from 'joi';
import {ResponseCode} from '../../configs/ResponseCodes';

export class PostRepository {

    constructor() {
    }

    public createPost(req: Request, res: Response) {
        try {
            const postValidate = {
                POST_COVER: {
                    TYPE: PostValidate.POST_COVER.TYPE,
                    URL: PostValidate.POST_COVER.URL
                },
                POST_CREATOR: PostValidate.POST_CREATOR,
                POST_DESCRIPTION: PostValidate.POST_DESCRIPTION,
                POST_MEDIA: PostValidate.POST_MEDIA,
                POST_TYPE: PostValidate.POST_TYPE
            };

            const postCover: string = req.body.postCover;
            const postCreator: string = req.body.postCreator;
            const postDescription: string = req.body.postDescription;
            const postMedia: any = req.body.postMediaType;
            const postType: number = req.body.postType;

            const adminPostTypes: any = [2, 3, 4];

            // tslint:disable-next-line:triple-equals
            // if ((tokenData.userType == 3 && adminPostTypes.indexOf(postType) >= 0) || (tokenData.userType != 3 && postType == 1)) {

            Joi.validate({
                POST_COVER: postCover,
                POST_CREATOR: postCreator,
                POST_DESCRIPTION: postDescription,
                POST_MEDIA: postMedia,
                POST_TYPE: postType
            }, postValidate, (err, value) => {
                if (err) {
                    // main.sendResponse(res, ResponseMessage.POST_CREATE_ERROR, err, false, ResponseCode.VALIDATION_ERROR);
                } else {
                    const post = new Posts({
                        POST_COVER: postCover,
                        POST_CREATOR: postCreator,
                        POST_DESCRIPTION: postDescription,
                        POST_MEDIA: postMedia,
                        POST_TYPE: postType
                    });

                    post.save()
                        .then((postData: IPostModel) => {
                            //main.sendResponse(res, ResponseMessage.POST_CREATE_SUCCESS, postData, true, ResponseCode.SUCCESS);
                        }).catch((error) => {
                        //logger.error(error);
                        //main.sendResponse(res, ResponseMessage.POST_CREATE_ERROR, error, false, ResponseCode.DATABASE_ERROR);
                    });
                }
            });

            //} else {
            //main.sendResponse(res, ResponseMessage.INVALID_PARAMTERS, [], false, ResponseCode.VALIDATION_ERROR);
            //}

        } catch (ex) {
            // logger.error(ex);
            //main.sendResponse(res, ResponseMessage.EXCEPTION, ex, false, ResponseCode.EXCEPTION);
        }

    }

    /*
        public updatePost(req: Request, res: Response) {
            return this.postRepository.updatePost(req, res);
        }

        public deletePost(req: Request, res: Response) {
            return this.postRepository.deletePost(req, res);
        }*/

    public viewPost(req: Request, res: Response) {
        const postId = req.params.postId;
        const query = Posts.aggregate([
            {
                $match: {
                    _id: Types.ObjectId(postId),
                    POST_STATUS: {$ne: 2}
                }
            },
            /*{
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
                    LIKE_COUNT: {$size: '$POST_LIKE'},
                    COMMENT_COUNT: {$size: '$POST_COMMENT'},
                    POST_LIKED: '$POST_LIKED',
                    POST_LIKE: '$POST_LIKE'
                }
            }*/

        ]);

        query.exec((err, result) => {
            if (err) {
                return res.status(ResponseCode.BAD_REQUEST).send(err);
            } else if (result.length > 0) {
                return res.status(200).send(result);
            }
        });
    }

    /*

        public addPostComment(req: Request, res: Response) {
            return this.postRepository.addPostComment(req, res);
        }

        public updatePostComment(req: Request, res: Response) {
            return this.postRepository.updatePostComment(req, res);
        }

        public deletePostComment(req: Request, res: Response) {
            return this.postRepository.deletePostComment(req, res);
        }

        public addPostlike(req: Request, res: Response) {
            return this.postRepository.addPostlike(req, res);
        }

        public removePostLike(req: Request, res: Response) {
            return this.postRepository.removePostLike(req, res);
        }

        public sharePost(req: Request, res: Response) {
            return this.postRepository.sharePost(req, res);
        }
    */


}