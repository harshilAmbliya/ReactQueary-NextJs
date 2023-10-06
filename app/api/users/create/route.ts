import { Users } from "@/dummy/users";
import { NextRequest, NextResponse } from "next/server"

export const POST =async (req:NextRequest,res:NextResponse) =>{
    const body = await req.json();
    console.log(body);
    const user = Users.push()

    return NextResponse.json({users:user},{status:201})

}