import User from "@/model/users";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  console.log(body);
  //   const { data } = body;
  const { id } = body;

  if (!id) {
    throw new Error("Id Was Not Found..");
  }

  const deleteUser = await User.deleteOne({
    _id: id,
  });

  return NextResponse.json(
    { message: "Delete user successfully.", deleteUser }, // Corrected property names here
    { status: 200 }
  );
};
