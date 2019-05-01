
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
    //   setInterval(() => {
    //     axios.get('static/linelist.json').then((res)=>{
    //       return res.data.data;
    //   }).then((data)=>{
    //     console.log(data);
    //       context.commit('setLineList',data);
    //   })
    // }, 6000);
        axios.get('/linelist').then((res)=>{
          return res.data.data;
      }).then((data)=>{
        
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
            t.dataAQI=JSON.parse(data[i].dataAQI);
            t.dataPosts=JSON.parse(data[i].dataPosts);
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