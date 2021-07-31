/*
vuex 的 mutations 模块
*/
import vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_COUNT_FOOD,
    DECREMENT_COUNT_FOOD,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [INCREMENT_COUNT_FOOD](state, { food }) {
        if(!food.count){
            // food.count=1;//第一次加

            vue.set(food,'count',1)//这种方式新增属性才可以保证在vue上实现数据绑定。
            state.cartFoods.push(food)
        }else{
            food.count++;
        }
    },
    [DECREMENT_COUNT_FOOD](state, { food }) {
        if(food.count){
            food.count--;
            if(food.count===0) state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
        

    },
    [CLEAR_CART](state) {
        // 清除food的count
        state.cartFoods.forEach(food=>food.count=0)
        state.cartFoods=[];
        

    },
    [RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
        state.searchShops = searchShops
      },
}