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
          console.log(data);
            context.commit('setLineList',data);
        })
    }
    
  
    
  }
  
  // mutations
  const mutations = {
    setLineList:(state,data)=>{
      let temp=[];
        for(let i=0;i<data.length;i++){
          let t={};
            t.datasets=data[i].datasets;
            t.title=data[i].title;
            temp.push(t)
        }
        
        state.line_list=temp;
        
      }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }