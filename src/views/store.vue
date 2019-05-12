<template>
    <div>
        <power-input @input="handleInput"></power-input>
         <!-- <power-input :value="stateValue" @input="handleStateValueChange"></power-input> -->
         <power-input v-model="stateValue"></power-input>
          {{stateValue}}
        {{inputValueLastLetter }}
        <!-- <power-show :content="inputValue"></power-show>     -->
        <p>appName : {{ appName }} </p>   
        <p>appNameWithVerson: {{appNameWithVersion}}</p>
        <p> userName : {{ userName }}</p>
        <p>userName firstLetter : {{ firstLetter }}</p>
        <p>appVersion : {{appVersion}}</p>
        <button @click="handleAppName">修改appName</button>
        <button @click="registerModule">动态注册模块</button>
        <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
    </div>
</template>
<script>

import PowerInput from '_c/PowerInput.vue'
import PowerShow from '_c/PowerShow.vue'

// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { stat } from 'fs';
export default {
  name: 'store',
  data () {
   return {
     inputValue:''
   } 
  },
  components: {
    PowerInput,
    PowerShow
  },
  computed: {
    
    ...mapGetters([
        'appNameWithVersion',
        'firstLetter'
    ]),
    // ...mapState([
    //   'appName'
    // ]),
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName 
    // })
    ...mapState({
      userName:state => state.user.userName,
      appName:state => state.appName,
      appVersion:state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
      // stateValue:state => state.stateValue
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue;
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      } 
    },
    // appName(){
    //   return this.$store.state.APP_NAME
    // },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1,1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_APP_VERSION',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName',
      'upDateUserName'
    ]),
    handleInput(val){
      this.inputValue = val;
    },
    handleAppName(){
      // this.$store.commit({
      //   type:'SET_APP_NAME',
      //   appName:'XIAOWEI'
      // })
      // this.SET_APP_NAME({
      //   appName:'xiaowei'
      // })
      this.SET_APP_VERSION('5.0')
      this.SET_USER_NAME('laoliu')
      this.updateAppName();
      // this.$store.dispatch('upDateUserName','3232')
    },
    registerModule () {
      this.$store.registerModule(['user','todo'],{
        state: {
          todoList:[
            '学习module',
             '学习mutations',
             '学习actions'
          ]
        }
      })
    },
    handleStateValueChange(val){
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>

