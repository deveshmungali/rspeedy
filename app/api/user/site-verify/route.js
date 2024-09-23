import db from '@/lib/db';  // Your database connection

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('site') || '';

  try {
    // Query the database for the user with a partial match on the provided name
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE website_1 LIKE ?',
      [`%${name}%`]  // Add wildcards to perform partial matching
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
