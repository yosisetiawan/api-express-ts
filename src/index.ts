import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import { config as dotenv} from 'dotenv'


// Routes
import AuthRoutes from './routes/AuthRoutes'

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @class App
 */
class App {

    /**
     *
     *
     * @type {Application}
     * @memberof App
     */
    public app: Application;

    /**
     *Creates an instance of App.
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @memberof App
     */
    constructor(){
        this.app = express();
        this.plugins()
        this.routes()
        dotenv() 
    }

    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @protected
     * @memberof App
     */
    protected plugins(): void{
        this.app.use(bodyParser.json())
        this.app.use(morgan('dev'))
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @protected
     * @memberof App
     */
    protected routes(): void{
        this.app.use('/api/v1/auth', AuthRoutes)
    }
}

const port: any = process.env.PORT
const app = new App().app

app.listen(port, () => {
    console.log(`Application running in port ${port}`)
})