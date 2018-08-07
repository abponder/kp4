{
    development = {
      "username": process.env.DEV_USERNAME,
      "password": process.env.DEV_PASSWORD,
      "database": process.env.DEV_DATABASE,
      "host": process.env.DEV_HOST,
      "port": process.env.DEV_DB_PORT,
      "dialect": process.env.DEV_DIALECT,
      "logging": process.env.DEV_FREEZE_TABLE_NAME,
      "freezeTableName": process.env.DEV_FREEZE_TABLE_NAME,
      "operatorsAliases": process.env.DEV_OPERATORS_ALIASES,
      "pool": {
              "max": DEV_POOL_MAX,
              "min": DEV_POOL_MIN,
              "idle": process.env.DEV_POOL_IDLE
            }
    },
    production = {
      "use_env_variable": process.env.PROD_USE_ENV_VARIABLE,
      "dialect": process.env.PROD_DIALECT
    }
  }
