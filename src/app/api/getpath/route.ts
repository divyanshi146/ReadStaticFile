// src/app/api/getpath/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const filePath = 'D:/RegistrationOfBSA.txt'; // Use forward slashes or double backslashes

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (err: unknown) {
    // Check if err is an instance of Error
    if (err instanceof Error) {
      return NextResponse.json({ error: 'Failed to read file', details: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to read file', details: 'Unknown error occurred' }, { status: 500 });
  }
}





// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   const file = await req.json(); // Process the file from the request body
//   // You can process the file here if needed
//   return NextResponse.json({ message: 'File received', file }, { status: 200 });
// }

// export async function GET() {
//   return NextResponse.json({ message: 'GET method not implemented' }, { status: 501 });
// }
