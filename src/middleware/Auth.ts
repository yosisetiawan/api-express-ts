import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auth = (req: Request, res:Response, next:NextFunction): any => {
    if(!req.headers.authorization){
        return res.status(401).send("Tidak Authenfikasi")
    }

    let secretKey = process.env.JWT_KEY || 'secret';
    const token: string = req.headers.authorization.split(" ")[1];

    try{
        const credential: string | object = jwt.verify(token, secretKey)

        if(credential){
            next();
        }

        return res.status(401).send('Token Invalid')
    }catch(err){
        return res.send({
            messages:'Terjadi Error',
            hint: err
        })
    }
}