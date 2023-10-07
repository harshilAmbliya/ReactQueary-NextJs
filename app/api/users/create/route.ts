import connectdb from "@/db/db";
import User from "@/model/users";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { formData } = body;
    const { email, password, username } = formData;
    await connectdb();
    const user = await User.create({
      email,
      password,
      username,
    });

    // console.log(user);

    return NextResponse.json(
      { message: "User created successfully..", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Error creating user", error: error },
      { status: 500 }
    );
  }
};
