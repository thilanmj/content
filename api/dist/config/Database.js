"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const environment_1 = require("../environments/environment");
class Database {
    constructor() {
        this.DatabaseHost = environment_1.environment.DATABASE_HOST;
        this.DatabasePort = environment_1.environment.DATABASE_PORT;
        this.DatabaseName = environment_1.environment.DATABASE_NAME;
        this.DatabaseUser = process.env.DATABASE_USER;
        this.DatabasePassword = process.env.DATABASE_PASSWORD;
    }
    connection() {
        const options = {
            db: { native_parser: true },
            server: { poolSize: 5 },
            user: this.DatabaseUser,
            pass: this.DatabasePassword,
            promiseLibrary: global.Promise
        };
        let connectionString = '';
        if (!environment_1.environment.PROD) {
            connectionString = 'mongodb://' + this.DatabaseHost + ':' + this.DatabasePort + '/' + this.DatabaseName;
        }
        else {
            connectionString = 'mongodb://' + this.DatabaseUser + ':' + this.DatabasePassword + '@' + this.DatabaseHost + ':' + this.DatabasePort + '/' + this.DatabaseName;
        }
        mongoose.connect(connectionString);
    }
    static debug(debug) {
        mongoose.set('debug', debug);
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map