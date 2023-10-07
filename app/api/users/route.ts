import connectdb from "@/db/db";
import { Users } from "@/dummy/users";
import User from "@/model/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await connectdb()
    const user = await User.find();
    // console.log(user)
  
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("Error", error);
  }
};
