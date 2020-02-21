import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auth = ( res:Response, req:Request, next: NextFunction) : any => {
    if(!req.headers.authorization){
        return res.status(401).send({
            status: res.statusCode,
            messages: 'You not authorization'
        })
    }

    let key = process.env.JWT_KEY ||'secret'
    const token:string = req.headers.authorization.split(" ")[1]

    try{
        const credential: string | object = jwt.verify(token, key)

        if(credential){
            next();
        }

        return res.status(401).send({
            status: res.statusCode,
            messages: 'Token Invalid'
        })
    }catch (err){
        return res.send(err)
    }
}