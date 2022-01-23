import { Sequelize  } from "sequelize";

const db = new Sequelize('piccante', 'jerdasi', 'Jeremi@88', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;