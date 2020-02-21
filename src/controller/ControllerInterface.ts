import {Request, Response} from 'express'

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @interface IController
 */
interface IController{
    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @param {Request} req
     * @param {Response} res
     * @returns {Response}
     * @memberof IController
     */
    index(req: Request, res: Response): Response
    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @param {Request} req
     * @param {Response} res
     * @returns {Response}
     * @memberof IController
     */
    create(req: Request, res: Response): Response
    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @param {Request} req
     * @param {Response} res
     * @returns {Response}
     * @memberof IController
     */
    show(req: Request, res: Response): Response
    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @param {Request} req
     * @param {Response} res
     * @returns {Response}
     * @memberof IController
     */
    update(req: Request, res: Response): Response
    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @param {Request} req
     * @param {Response} res
     * @returns {Response}
     * @memberof IController
     */
    destroy(req: Request, res: Response): Response
}

export default IController;