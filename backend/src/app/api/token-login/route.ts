import {PrismaClient} from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()


export async function POST(req: NextRequest) {
    try {
        
        const body = await req.json()

        const {token} = body

        const response = await prisma.user.findFirst({
            where: {
                accessToken: token
            }
        })

        if(!response) {
            return NextResponse.json({statusCode: 500, message: 'unable to login with token', status: false})
        }

         
        return NextResponse.json({statusCode: 200, message: 'User is login successfully', status: true})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({statusCode: '500', message: 'Unable to resolve the token-login-function', status: false})
    }
}