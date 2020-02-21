import {Router} from 'express'
import IRouter from './RoutesInterface'

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @abstract
 * @class baseRoutes
 * @implements {IRouter}
 */
abstract class baseRoutes implements IRouter{
    /**
     *
     *
     * @type {Router}
     * @memberof baseRoutes
     */
    public router: Router

    /**
     *Creates an instance of baseRoutes.
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @memberof baseRoutes
     */
    constructor(){
        this.router = Router()
        this.routes()
    }

    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @abstract
     * @memberof baseRoutes
     */
    abstract routes():void
}

export default baseRoutes;