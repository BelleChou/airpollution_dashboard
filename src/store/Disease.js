import axios from 'axios'
const state = {
    disease_data:[],
  }
  
  // getters
  const getters = {
    diseaseData: (state) => {
      return state.disease_data;
    },
}
  
  // actions
  const actions = {
    getDiseaseData:(context)=>{
        axios.get('/static/disease.json').then((res)=>{
            return res.data.data;
        }).then((data)=>{
            context.commit('setDiseaseData',data);

        })
    }
  }
  
  // mutations
  const mutations = {
      setDiseaseData:(state,data)=>{
        var temp=[];
        for(var i=0;i<data.length;i++){
            let t={
                value:data[i].percent,
                name:data[i].disease
            }
            temp.push(t);
        }
        
        state.disease_data=temp;
        console.log(state.disease_data);
        
      }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }