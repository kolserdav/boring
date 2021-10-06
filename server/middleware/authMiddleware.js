import jwt from 'jsonwebtoken'
import config from 'config'

function authMiddleware(req, res, next){
    if (req.method === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(401).json({message: 'Not auth'})
        }
        const decoded = jwt.verify(token, config.secretKey)
        req.user = decoded
        next()
    }catch(e){
        res.status(401).json({message: "Not auth"})
    }
}

export default authMiddleware