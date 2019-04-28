import axios from 'axios'
const state = {
    line_list:[]
}
  
  // getters
  const getters = {
    lineList: (state) => {
      return state.line_list;
    },
}
  
  // actions
  const actions = {
    getLineList:(context)=>{
        axios.get('static/linelist.json').then((res)=>{
            return res.data.data;
        }).then((data)=>{
            context.commit('setLineList',data);

        })
    }
    
  
    
  }
  
  // mutations
  const mutations = {
    setLineList:(state,data)=>{
        
        state.setLineList=data;
        
      }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }