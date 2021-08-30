import jwt from 'jsonwebtoken'
import config from 'config'

function checkRole(role) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ message: 'Not auth' })
            }
            const decoded = jwt.verify(token, config.secretKey)
            req.user = decoded
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Access denied" })
            }

            next()
        } catch (e) {
            res.status(401).json({ message: "Not auth" })
        }
    }
} 

export default checkRole