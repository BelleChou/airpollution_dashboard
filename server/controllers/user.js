const user = require('../models/user.js')
const jwt = require('jsonwebtoken')

const getUserInfo = async function (ctx) {
  const id = ctx.params.id // 获取url里传过来的参数里的id
  const result = await user.getUserById(id) // 通过await “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

const postUserAuth = async function (ctx){
  const data = {
    name:'admin',
    password:'123456'
  }
  const userInfo = await user.getUserByName(data.name)
  if(userInfo != null){
   if(userInfo.password != data.password){
     ctx.body = {
       success:false,
       info:'密码错误！'
     }
   }else{
     const userToken = {
       name: userInfo.user_name,
       id: userInfo.id
     }
     const secret = 'vue-koa-demo'
     const token = jwt.sign(userToken, secret)
     ctx.body = {
       success:true,
       token:token
     }
   }
  }else{
    ctx.body = {
      success:false,
      info: '用户不存在！'
    }
  }
}

module.exports = {
  getUserInfo, // 把获取用户信息的方法暴露出去，
  postUserAuth
}