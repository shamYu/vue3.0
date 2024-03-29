import vue from 'vue'

const mutations = {
    SET_APP_NAME (state,params) {
      state.appName = params
    },
    SET_APP_VERSION (state,params) {
      vue.set(state,'appVersion',params)
    },
    SET_STATE_VALUE (state, value){
      state.stateValue = value
    }
    
}

export default mutations