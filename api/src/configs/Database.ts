import * as mongoose from 'mongoose';
import {environment} from '../environments/environment';

export default class Database {

    private DatabaseHost: string = environment.DATABASE_HOST;
    private DatabasePort: string = environment.DATABASE_PORT;
    private DatabaseName: string = environment.DATABASE_NAME;
    private DatabaseUser: string = process.env.DATABASE_USER;
    private DatabasePassword: string = process.env.DATABASE_PASSWORD;

    public connection() {

        const options = {
            db: {native_parser: true},
            server: {poolSize: 5},
            user: this.DatabaseUser,
            pass: this.DatabasePassword,
            promiseLibrary: global.Promise
        };

        let connectionString = '';

        if (!environment.PROD) {
            connectionString = 'mongodb://' + this.DatabaseHost + ':' + this.DatabasePort + '/' + this.DatabaseName;
        } else {
            connectionString = 'mongodb://' + this.DatabaseUser + ':' + this.DatabasePassword + '@' + this.DatabaseHost + ':' + this.DatabasePort + '/' + this.DatabaseName;
        }

        mongoose.connect(connectionString, {useNewUrlParser: true});
    }

    public static debug(debug: any) {
        mongoose.set('debug', debug);
    }

}