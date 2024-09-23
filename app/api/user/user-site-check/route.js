import db from '@/lib/db';  // Your database connection

export async function GET(req) {
  const { searchParams } = new URL(req.url);  // Use req.url, not req.email
  const email = searchParams.get('email') || '';  // Get the 'email' query parameter

  try {
    // Query the database for the user with the provided email
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE user_email LIKE ?',
      [email]  // Email matching
    );

    const foundUser = rows[0];

    if (!foundUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(foundUser), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}
