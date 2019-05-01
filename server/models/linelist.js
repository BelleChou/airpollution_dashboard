const db = require('../config/db');
const Sequelize = db.sequelize;
const Linelist = Sequelize.import ('../schema/linelist');

Linelist.sync({force:false});

class LinelistModel{
    /**
     * 获取所有theme
     */
    static async getAllLine(){
        return await Linelist.findAll();
    }
}

module.exports = LinelistModel