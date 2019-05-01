const db = require('../config/db');
const Sequelize = db.sequelize;
const Disease = Sequelize.import ('../schema/disease');

Disease.sync({force:false});

class DiseaseModel{
    /**
     * 获取所有theme
     */
    static async getAllDisease(){
        return await Disease.findAll();
    }
}

module.exports = DiseaseModel