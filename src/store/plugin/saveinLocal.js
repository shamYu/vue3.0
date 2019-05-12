export default store => {
console.log('store 初始化啦')
if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe( (mutation, state ) => {
    console.log('提交mutations')
    localStorage.state = JSON.stringify(state)
  }) 
}