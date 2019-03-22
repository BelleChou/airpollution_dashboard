import axios from 'axios'

const state = {

}

const getters = {

}

const actions = {
  userLogin:(context,obj)=>{
    return axios.post('/auth/user', obj)
    .then(response =>{
        return response //反悔respond的json格式
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
