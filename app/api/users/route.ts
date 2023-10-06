import { Users } from "@/dummy/users";
import { NextRequest, NextResponse } from "next/server"

export const GET =  (req: NextRequest, res: NextResponse) => {
    // const body = await req.json();
    const user = Users

    return NextResponse.json({ users: user }, { status: 200 })

}