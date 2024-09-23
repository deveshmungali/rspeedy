import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: '109.106.255.43',      // Remote server IP
  user: 'ausd_admin',           // MySQL user
  password: 'makkpress#@123',   // MySQL password
  database: 'ausd_speedy_dashboard',  // Database to connect to
  connectTimeout: 10000,        // Optional: Increase timeout
});

export default connection;