const db = require('../config/db');
const Sequelize = db.sequelize;
const Theme = Sequelize.import ('../schema/theme');

Theme.sync({force:false});

class ThemeModel{
    /**
     * 获取所有theme
     */
    static async getAllTheme(){
        return await Theme.findAll();
    }
}

module.exports = ThemeModel