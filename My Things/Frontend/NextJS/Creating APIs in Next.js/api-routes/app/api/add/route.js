import { NextResponse } from "next/server";
// NextResponse is a built-in class in Next.js that allows us to create HTTP responses in API routes. It provides methods to send JSON responses, set headers, and handle different HTTP status codes. In this code snippet, we are using NextResponse.json() to send a JSON response back to the client after processing the incoming request data.

export async function POST(request) {
    // page.js se yaha par data aa rha hai to yaha par data kaise lenge? To iske liye apne data ko request.json() ki mdad se access krenge.
    let data = await request.json()
    console.log(data)
    return NextResponse.json({success: true, data})
} 
