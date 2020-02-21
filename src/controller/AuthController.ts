import {Request, Response} from 'express'
import Authentication from '../utils/Authentication'
const db = require('../db/models')

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @class AuthController
 */
class AuthController {
    
    register = async (req: Request, res: Response) : Promise<Response> => {
        let { username,password } = req.body
        const hashedPassword = await Authentication.hashing(password)

        await db.user.create({ username, password: hashedPassword})

        return res.send({
            status: res.statusCode,
            messages: 'Berhasil Menambahkan user',
            result:{
                username: username
            }
        })
    }

    login = async (req: Request, res: Response) : Promise<Response> => {
        let { username, password } = req.body

        const user = await db.user.findOne({
            where: { username }
        })

        if(user){
            const compare = await Authentication.comparePassword(password, user.password)

            if(compare){
                const token = Authentication.generateToken(user.id,user.username,user.password)

                return res.status(200).send({
                    status: res.statusCode,
                    username: username,
                    token: token
                })
            }else{
                return res.status(409).send({
                    status: res.statusCode,
                    messages: 'Username dan password tidak ditemukan'
                }) 
            }
        }else{
           return res.status(409).send({
               status: res.statusCode,
               messages: 'Username dan password tidak ditemukan'
           }) 
        }
    }

    profile = (req: Request, res: Response) : Response => {
        return res.send('INI USER MUUU')
    }
}

export default new AuthController();