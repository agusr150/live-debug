const env = process.env.NODE_ENV || 'development'

//gak paham penulisan macam ini... boleh diubah macam biasa gak ya????
switch (env) {
  case 'development':
    require('dotenv').config({path: process.cwd() + '/.env'})
      break
  case 'test':
    require('dotenv').config({path: process.cwd() + '/.env.test'})
}

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
}

// module.exports = {
//     "development": {
//       "username": "postgres",
//       "password": "postgres",
//       "database": "libraryTest2",
//       "host": "127.0.0.1",
//       "dialect": "postgres"
//     }
// }