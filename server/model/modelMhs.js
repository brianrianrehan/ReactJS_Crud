import { Sequelize  } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Mahasiswa = db.define('mahasiswa',{
    npm: { type:DataTypes.STRING },
    nama: { type:DataTypes.STRING },
    kelas: { type:DataTypes.STRING },
    kuis: { type:DataTypes.INTEGER },
    uts: { type:DataTypes.INTEGER },
    uas: { type:DataTypes.INTEGER },
},{
    freezeTableName:true
});

export default Mahasiswa;
