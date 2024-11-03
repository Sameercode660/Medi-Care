import jwt from 'jsonwebtoken'

export function jwtGenerateToken(email: string) {
    return jwt.sign({data: email}, process.env.JWT_SECRET || "Sam", { expiresIn: '30d' })
}

export function jwtVerifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || "Sam")
}
