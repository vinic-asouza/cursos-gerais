module.exports =
    {
        "development": {
            "username": "prismauser",
            "password": "prisma@net11",
            "database": "justcall",
            "host": "ppg1.cw5mibcsstsr.us-east-1.rds.amazonaws.com",
            "dialect": "postgres",
            "operatorsAliases": false
        },
        "production": {
            "host": process.env.DB_HOST,
            "port": process.env.DB_PORT
        }
    }  