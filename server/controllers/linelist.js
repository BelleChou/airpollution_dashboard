const LinelistModel = require('../models/linelist')

class LinelistController{
    static async allLine(ctx){
        try{
            let data = await LinelistModel.getAllLine();
            ctx.response.status = 200;
            ctx.body = {
                code:200,
                msg:'查询成功',
                data
            }
        }catch(err){
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data
                }
            }
    }
}
module.exports = LinelistController
