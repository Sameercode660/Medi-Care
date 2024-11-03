import { jwtGenerateToken } from "@/utils/jwtToken";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { id, otp } = body;

    const response = await prisma.user.findUnique({
      where: {
        id,
        otp,
      },
    });

    if (!response) {
      return NextResponse.json({
        statusCode: 400,
        message: "Inavalid otp code entered",
        status: false,
      });
    }

    const token = jwtGenerateToken(id);

    const update = await prisma.user.update({
      where: {
        id,
      },
      data: {
        accessToken: token,
      },
    });

    return NextResponse.json({
      statuscode: 200,
      message: "Successfully created user",
      token,
      response: update,
      status: true,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Unable to resolve the otp-verification function",
      status: false,
    });
  }
}
