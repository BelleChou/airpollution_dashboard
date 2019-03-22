const db = require('../config/db.js')
const userModel = '../schema/user.js'
const TodolistDb = db.Todolist

const User = TodolistDb.import(userModel)

const getUserByName = async (name) => {
  console.log(name)
  const userInfo = await User.findOne({
    where:{
      user_name: name
    }
  })
  return userInfo
}
const getUserById = async(id)=>{
  const userInfo = await User.findOne({
    where:{
      id :id
    }
  })
  return userInfo
}

module.exports = {
  getUserById,
  getUserByName
}
