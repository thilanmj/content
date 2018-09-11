export interface IPost {

    POST_CREATOR?: string;
    POST_DESCRIPTION?: string;
    POST_CREATED_DATE?: Date;
    POST_UPDATED_DATE?: Date;
    POST_MEDIA?: [{
        TYPE?: string,
        URL?: string
    }];
    POST_LIKE?: string;
    POST_DISLIKE?: string;
    POST_COMMENT?: [{
        USER_ID?: string;
        DESCRIPTION?: string;
        POST_COMMENT_CREATED_DATE?: Date;
        POST_COMMENT_UPDATED_DATE?: Date;
    }];
    POST_TYPE?: number;
    POST_COVER?: {
        TYPE?: string,
        URL?: string
    };
}