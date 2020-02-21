import BaseRoutes from './BaseRoutes'

// Controller
import AuthController from '../controller/AuthController'

// Middleware
import validate from '../middleware/AuthValidator'
import { auth } from '../middleware/Auth'

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @class AuthRoutes
 * @extends {BaseRoutes}
 */
class AuthRoutes extends BaseRoutes{

    /**
     *
     *
     * @author Yosi Setiawan
     * @date 2020-02-16
     * @memberof AuthRoutes
     */
    public routes(): void{
        this.router.post('/register', validate, AuthController.register)
        this.router.post('/login', AuthController.login)
        this.router.get('/profile', auth, AuthController.profile)
    }
}

export default new AuthRoutes().router