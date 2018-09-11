import {Response} from 'express';

export class ApiController {

    public Response: string;

    public sendResponse(res: Response, message: string, data: any, success: boolean, code: number): object {
        return res.status(code).send({
            code,
            data,
            message,
            success
        });

    }
}