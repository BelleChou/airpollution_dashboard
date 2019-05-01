const db = require('../config/db');
const Sequelize = db.sequelize;
const City = Sequelize.import ('../schema/city');

City.sync({force:false});

class CityModel{
    /**
     * 获取所有theme
     */
    static async getAllCity(){
        return await City.findAll();
    }
}

module.exports = CityModel