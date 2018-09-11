import ErrnoException = NodeJS.ErrnoException;

export class MommyPageGlobalException implements ErrnoException {
    name: string;
    message: string;

    constructor(message: string) {
        console.log(message);
    }

}