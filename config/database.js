module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'database-2.crqqxuix1erp.ap-south-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'karthik'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Cricketman1'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
