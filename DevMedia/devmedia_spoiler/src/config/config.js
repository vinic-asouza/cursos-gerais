module.exports =
    {
        "development": {
            "database": {
                "user": "prismauser",
                "password": "prisma@net11",
                "name": "justcall",
                "port": 5432,
                "host": "ppg1.cw5mibcsstsr.us-east-1.rds.amazonaws.com",
                "dialect": "postgres",
                "operatorsAliases": false
            }
        },
        "production": {
            "database": {
                "host": process.env.DB_HOST,
                "port": process.env.DB_PORT
            }
        }
    }  