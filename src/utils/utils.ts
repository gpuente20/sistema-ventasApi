import jwt from 'jsonwebtoken';
import keys from '../config/keys';
import bcrypt from 'bcryptjs';

/**
 * 
 * 
 *@name Utils
 *@author Cesar Guerrero
 *@creation 27/06/24
 * 
 */

class Utils {
    /**
 * 
 * 
 *@name Utils
 *@description Metodo para generar un gtoken OAUTH
 *@author Cesar Guerrero
 *@creation 27/06/24
 * 
    **/

    public generateJWT(payload: any): string {
        var token = jwt.sign(payload, keys.secret.jwt, { expiresIn: '1h' });

        return token;
    }
    /**
 * 
 * 
 *@name Utils
*@description Obtener la informacuon del JWT
*@author Cesar Guerrero
*@creation 27/06/24
*@returns object
    **/
    public getPayload(token: string): any {
        var payload = <any>jwt.verify(token, keys.secret.jwt)
        const { iat, exp, ...data } = payload;//segmentacion de datos

        return data;
    }
    /**
 * 
 * 
 *@name hashPassword
*@description Encriptar cadena de texto
*@author Cesar Guerrero
*@param password
*@returns String
    **/
    public async hashPassword(password: string): Promise<String> {
        const salt = await bcrypt.genSaltSync(10);
        return await bcrypt.hashSync(password, salt)
    }
    /**
 * 
 * 
 *@name checkPassword
*@description Verificar la contraseña
*@author Cesar Guerrero
*@param password
*@param encryptedPassword
*@returns Promise<boolean>
    **/
    public async checkPassword(password: string, encryptedPassword: string): Promise<boolean> {
        return await bcrypt.compareSync(password, encryptedPassword);
    }
}

export const utils = new Utils();