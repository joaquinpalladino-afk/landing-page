import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
const email = await request.json();
console.log("Email: ", email);

try{
return new NextResponse(JSON.stringify({message: "Email sent", email}), {status: 200});
}catch(error){
return new NextResponse(JSON.stringify({message: "Error sending email", error}), {status: 500});
}
}