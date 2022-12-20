import { Sequelize } from "sequelize";

const db = new Sequelize('ujian_crud','root','',{
    host:"localhost",
    dialect:"mysql"
});

export default db;