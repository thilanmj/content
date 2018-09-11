import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';

// configs data
import Database from './configs/Database';

import PostRouter from './routes/PostRouter';

export default class Server {

    public app: express.Application;
    public db: Database;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
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
    public api() {
        //empty for now
    }

    /**
     * Configure application
     *
     * @class Server
     * @method configs
     */
    public config() {
        this.db = new Database();
        this.db.connection();


        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
    public routes() {
        // const multiparty = require('connect-multiparty'),
        // multipartyMiddleware = multiparty();

        const router: express.Router = express.Router();

        this.app.use('/', router);

        this.app.use('/api/v1/posts', PostRouter);

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