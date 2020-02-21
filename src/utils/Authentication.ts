import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

/**
 *
 *
 * @author Yosi Setiawan
 * @date 2020-02-16
 * @class PasswordHash
 */
class PasswordHash {
    
    /**
     *
     *
     * @static
     * @memberof PasswordHash
     */
    public static hashing = (password: string): Promise<String> => {
        return bcrypt.hash(password, 10)
    }

    /**
     *
     *
     * @static
     * @memberof PasswordHash
     */
    public static comparePassword = async (text: string, encryptText: string) : Promise<boolean> => {
        let result = await bcrypt.compare(text, encryptText)

        return result;
    }

    public static generateToken = (id: number, username: string, password: string) : string  => {
        const secretKey :string = process.env.JWT_KEY || 'secret'

        const token = jsonwebtoken.sign({id, username, password}, secretKey)

        return token;
    } 
}

export default PasswordHash;