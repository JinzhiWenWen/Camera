import Vue from 'vue'
import vuex from 'vuex'
import student_add from './stuAdd/add.js' 

//把vuex变为插件来使用（你在其他组件中才能通过this.$store）
Vue.use(vuex)
//创建vue
export default new vuex.Store({
    state:{
        store_candy_numer:'',//糖果数
        show_candy:'',//最多可兑换slk
        num:1,
    },
    getters:{
        // fn(state){
        //     return state.num >=this.show_candy.getSlk ? this.show_candy.getSlk : state.num
        // }
    },
    mutations:{
        candy_fn(state,opt){
            state.store_candy_numer= opt
        },
        show_candy_fn(state,opt){
            state.show_candy= opt
        },
        setTest(state,opt){
            state.num= opt
        }
    },
    actions:{
        candy_actions(state,opt){//糖果总数
            this._vm.$http.get('http://192.168.1.109:3000/v1/draw/cardList/5b8a5ab830c9c562f96c7f9e').then(res=>{
                    console.log('糖果总数',res.data)
                    store.commit('candy_fn', res.data.data.candyNum);    
           })
        },
        show_candy_actions(state,opt){//显示兑换和最多可兑换
            this._vm.$http.get('http://192.168.1.109:3000/v1/draw/change/5b8a5ab830c9c562f96c7f9e').then(res=>{
                     console.log('最多可兑换=》',res.data)   
                     state.state.show_candy=res.data.data;
           })
        },
        exchange_actions(state,opt){//确认兑换
            console.log('我要兑换的slk数量=》',state.state.num)
            this._vm.$http.post('http://192.168.1.109:3000/v1/draw/exchange',{
                "uid":"5b8a5ab830c9c562f96c7f9e",
                "slk":state.state.num,
            }).then(res=>{
                 if(res.data.data){
                    state.state.store_candy_numer=res.data.data.user.candyNum;
                    console.log('确认兑换=》',res.data)  
                 }else{
                     console.log('不好意思，您没有足够的糖果数字哦')
                 }                      
            })
        }
    },
    modules:{
        student_add
    }

})