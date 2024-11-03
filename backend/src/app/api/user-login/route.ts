import { comparePassword } from "@/utils/bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
        const body = await req.json()

        const {email, password} = body

        if(!email || !password) {
            return NextResponse.json({statusCode: 400, message: "Anyone field is empty", status: false})
        }

        const response = await prisma.user.findFirst({
            where: {
                email,
                password,
            }
        })
        const hashedPassword = response?.password

        const compare = await comparePassword(password, hashedPassword || "Sample")

        if(!compare) {
            return NextResponse.json({statusCode: 500, message: 'Inavalid Credentials', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'User is logged in successfully', response, status: true})

    } catch (error) {
        console.log(error)
        return NextResponse.json({statusCode: 500, message: 'Unable to resolve the login user function', status: false})
    }
}