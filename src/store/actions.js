import { getAppName } from '@/api/app'

const actions = {
  //  updateAppName ({ commit }){
  //     // getAppName().then((res) => {
  //     //   const { code,info: { appName }} = res;
  //     //     commit('SET_APP_NAME',appName)
  //     // })
     
  //  }
  async updateAppName ( { commit} ) {
    try{
      const { info : { appName }} = await getAppName();
      commit('SET_APP_NAME',appName)
    }catch (err){
      console.log(err)
    }
  }
}

export default actions;