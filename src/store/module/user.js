import axios from 'axios'
let api="http://localhost:3000"
const state = {

}

const getters = {

}

const actions = {
  userLogin:(context,obj)=>{
    return axios.post(`${api}/auth/user`, obj)
    .then(response =>{
        return response.json() //反悔respond的json格式
      }).catch(function (error) {
        console.log(error);
      })

  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
