import userService from "../service/userService.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import config from 'config'
import userModel from "../model/userModel.js"

const generateJwt = (id, role) => {
    return jwt.sign(
        {id: id, role},
        config.secretKey,
        {expiresIn: '24h'}
    )
}

class UserService {

    async registration(req, res) {
        try {
            const {email, password, role} = req.body
            if(!email || !password) {
                return res.status(404).send('Uncorrect email or password');
            }    
            const candidate = await userModel.findOne({'email': email})
            if (candidate){
                return res.status(404).send(`User with ${email} already exist`);
            }
            const hashPassword = await bcrypt.hash(password, 3)
            const user = await userService.registration({email, role: 'USER', password: hashPassword})
            const token = generateJwt(user.id, user.role)
            return res.json({token})

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body

            const user = await userModel.findOne({email})
            
            if (!user){
                return res.status(404).send(`User with ${email} not found`);
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if(!isPassValid){
                return res.status(404).send('Uncorrect password')
            }
            const token = generateJwt(user.id, user.role)
            return res.json({
                token
            })

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.role)
        return res.json({token})
    }
    
}

export default new UserService()