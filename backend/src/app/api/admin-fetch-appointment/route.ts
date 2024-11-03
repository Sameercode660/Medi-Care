import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
        const body = await req.json()

        const {userId} = body

        const response = await prisma.appointment.findMany({
            where: {
                userId
            }
        })

        if(!response) {
            return NextResponse.json({statusCode: 500, message: "Any any appointment exist", response: [], status: true})
        }

        return NextResponse.json({statusCode: 200, message: 'Fetched Successfully', response, status: true})

    } catch (error) {
        console.log(error)
        return NextResponse.json({statusCode: 500, message: "Unable to resolve fetch appointment controller", status: false})
    }
}