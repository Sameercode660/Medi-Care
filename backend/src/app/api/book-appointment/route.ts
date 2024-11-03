import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      userId,
      name,
      email,
      mobile,
      address,
      serviceName,
      appointmentDate,
      appointmentTime,
    } = body;

    if (
      !userId ||
      !name ||
      !email ||
      !mobile ||
      !address ||
      !serviceName ||
      !appointmentDate ||
      !appointmentTime
    ) {
      return NextResponse.json({
        statusCode: 400,
        message: "Anyone field is empty",
        status: true,
      });
    }

    const response = await prisma.appointment.create({
      data: {
        name,
        email,
        mobile,
        userId,
        address,
        serviceName,
        appointmentDate,
        appointmentTime,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 500,
        message: "Unable to create appointment",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Appointment created Successfully",
      response,
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Unable to resolve appointment booking",
      status: false,
    });
  }
}
