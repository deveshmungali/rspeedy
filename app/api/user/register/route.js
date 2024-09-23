import { NextResponse } from "next/server";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import db from "@/lib/db";  // MySQL connection

export async function POST(request, response) {
  try {
    let reqBody = await request.json();

    // Check if the user already exists in the database
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE user_email = ?',
      [reqBody.email]
    );

    const foundUser = rows[0];

    if (foundUser) {
      return NextResponse.json({
        status: "fail",
        message: "User already exists",
      });
    }

    // Insert new user into the database
    await db.execute(
      'INSERT INTO users (user_email, password) VALUES(?, ?)',
      [reqBody.email, reqBody.password]
    );

    // Assign additional properties to the request body
    reqBody.image = avatar3;

    return NextResponse.json({
      status: "success",
      message: "User created successfully",
      data: reqBody,
    });
  } catch (e) {
    console.log("An error occurred:", e);
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: e.message,  // Sending error message back for debugging
    });
  }
}