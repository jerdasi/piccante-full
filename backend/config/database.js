import { Sequelize  } from "sequelize";

const db = new Sequelize('piccante', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
