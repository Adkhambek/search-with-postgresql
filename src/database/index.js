const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'asa',
    database: 'demodb'
})

const fetch = async (query, ...params) => {
   const connect = await pool.connect()
   try {
    const {rows} = await connect.query(query, params.length ? params : null) 
    console.log(rows);
   } catch (error) {
       console.log(error);
   } finally {
    connect.release()
   }
} 

module.exports = fetch