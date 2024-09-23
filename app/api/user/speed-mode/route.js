import db from '@/lib/db';  // Your database connection
import { getSession } from "next-auth/react";  // Server-side session retrieval

export async function POST(req) {
  try {
    // Parse the request body to extract speed (plan ID)
    const { speed } = await req.json();

    // Retrieve the session to get the logged-in user's email
    const session = await getSession({ req });

    console.log(session);

    if (!session || !session.user || !session.user.email) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), {
        status: 401,  // Unauthorized
      });
    }

    const email = session.user.email;

    if (!speed || !email) {
      return new Response(JSON.stringify({ error: 'Speed (plan ID) and email are required' }), {
        status: 400,  // Bad Request if speed or email is not provided
      });
    }

    // Update the selected plan for the user based on email
    const [result] = await db.execute(
      "UPDATE users SET selected_plan_id = ? WHERE user_email = ?",
      [speed, email]  // Passing speed and email as parameters
    );

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: 'User not found or no rows updated' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: 'Plan updated successfully' }), { status: 200 });
  } catch (error) {
    console.error("Error in updating user plan:", error);  // Log the error for debugging
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}
