import db from '@/lib/db';  // Your database connection

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('site') || '';

  // Define broad CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',  // Allow all origins for testing
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',  // Allow all common methods
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept',  // Allow common headers
    'Access-Control-Allow-Credentials': 'true',  // If you need to send credentials (cookies, etc.)
  };

  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    // Query the database for a user with a partial match on the provided name
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE website_1 LIKE ?',
      [`%${name}%`]  // Add wildcards to perform partial matching
    );

    const foundUser = rows[0];

    if (!foundUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers,  // Ensure CORS headers are returned in all responses
      });
    }

    return new Response(JSON.stringify(foundUser), {
      status: 200,
      headers,  // Ensure CORS headers are returned in all responses
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers,  // Ensure CORS headers are returned in error responses
    });
  }
}
