const state = {
    theme_data:[],
  }
  
  // getters
  const getters = {
    themeData: (state) => {
      return state.theme_data;
    },
}
  
  // actions
  const actions = {
    getThemeData:(context)=>{
        axios.get('/api/theme').then((res)=>{
            return res.data.data;
        }).then((data)=>{
          console.log(data);
            context.commit('setThemeData',data);

        })
    }
    
  
    
  }
  
  // mutations
  const mutations = {
      setThemeData:(state,data)=>{
        var temp=[];
        for(var i=0;i<data.length;i++){
            let t={
                value:data[i].percent,
                name:data[i].theme
            }
            temp.push(t);
        }
        
        state.theme_data=temp;
        
      }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }