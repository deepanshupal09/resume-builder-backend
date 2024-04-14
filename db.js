const { Pool } = require('pg');

const pool = new Pool({
  user: 'resumebuilder_user',
  password: 'dwQ22azeR3g9IJcXQpNKWeWp7xhVClLK',
  host: 'dpg-cn6augq1hbls73c8f1gg-a.singapore-postgres.render.com',
  port: 5432, // default Postgres port
  database: 'resumebuilder',
  ssl: true
});

module.exports = pool;