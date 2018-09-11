"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
// configs data
const Database_1 = require("./configs/Database");
const PostRouter_1 = require("./routes/PostRouter");
class Server {
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    api() {
        //empty for now
    }
    /**
     * Configure application
     *
     * @class Server
     * @method configs
     */
    config() {
        this.db = new Database_1.default();
        this.db.connection();
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // tslint:disable-next-line:max-line-length
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    routes() {
        // const multiparty = require('connect-multiparty'),
        // multipartyMiddleware = multiparty();
        const router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/posts', PostRouter_1.default);
        this.app.all('*', (req, res) => {
            // throw new Error('Bad request');
            res.send({
                code: 404,
                message: 'bad routes',
                success: false
            });
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map