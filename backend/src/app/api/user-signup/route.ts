import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendOtp } from "@/utils/sendOtp";
import { encryptPassword } from "@/utils/bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, mobile, password } = body;

    if (!name || !email || !mobile || !password) {
      return NextResponse.json({
        statusCode: 400,
        message: "Anyone field is empty",
        status: false,
      });
    }

    const otp = await sendOtp(email);

    if (!otp) {
      return NextResponse.json({
        statusCode: 500,
        message: "Unable to generate the otp",
        status: false,
      });
    }

    const response = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        otp: otp.toString(),
        password: await encryptPassword(password),
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 500,
        message: "Unable to register the user information",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "user resgisterd Successfully",
      response,
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Unable to resolve the signup",
      status: false,
    });
  }
}
