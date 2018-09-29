// tslint:disable-next-line:interface-name
export interface IUser {
    FIRST_NAME?: string;
    LAST_NAME?: string;
    EMAIL?: string;
    PASSWORD?: string;
    MEMBER_TYPE?: number;
    CITY?: string;
    COUNTRY?: string;
    COMPANY_ID?: string;
    JOB_TITLE?: string;
    PHOTO?: string;
    SOCIAL_MEDIA?: {
        TWITTER: string,
        LINKEDIN: string,
        FACEBOOK: string,
        INSTAGRAM: string,
    };
    TOKEN?: string;
    PASSWORD_RESET_TOKEN?: string;
    IS_PASSWORD_RESET?: boolean;
    ACTIVATION_TOKEN?: string;
    IS_ACTIVE?: boolean;
    CREATEDAT?: Date;
    UPDATEDAT?: Date;
}