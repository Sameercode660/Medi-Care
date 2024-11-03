import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {appointmentId} = await req.json()

        if(!appointmentId) {
            return NextResponse.json({statusCode: 400, message: 'Field is empty', status: false})
        }

        const  response = await prisma.appointment.delete({
            where: {
                id: appointmentId
            }
        })

        if(!response) {
            return NextResponse.json({statusCode: 500, message: 'Unable to delete the appointment', status: false})
        }

        return NextResponse.json({statusCode: 200, message: "Deleted successfully", response, status: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({statusCode: 500, message: 'Unable to resolve the cancel appointment section', status: false})
    }
}

