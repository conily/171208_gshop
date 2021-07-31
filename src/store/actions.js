// 通过mutation间接更新sate
import { call } from 'file-loader'
import {reqAddress, reqCategorys, reqShops,reqUser,reqLogout,reqShopGoods,reqShopInfo,reqShopRatings,reqSearchShop} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO, RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO,INCREMENT_COUNT_FOOD,DECREMENT_COUNT_FOOD,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'


export default {
    // 异步获取地址
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, { address: result.data })
    },
    // 异步获取分类列表
    async getCategorys({ commit }) {
        const result = await reqCategorys()
        commit(RECEIVE_CATEGORYS, { categorys: result.data })
    },
    // 异步获取商家列表
    async getShops({ commit, state }) {
        const { latitude, longitude } = state
        const result = await reqShops({ latitude, longitude })
        commit(RECEIVE_SHOPS, { shops: result.data })
    },
    // 同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    //异步获取用户信息
    async getUserInfo({commit}) {
        const result = await reqUser()
        if (result.code === 0) {
          const userInfo = result.data
          commit(RECEIVE_USER_INFO, {userInfo})
        }
      },
    //   异步退出
    async logout({commit}){
        const result = await reqLogout()
        if (result.code === 0) {
          const userInfo = result.data
          commit(RESET_USER_INFO, {userInfo})
        }

    },
    async getShopInfo({commit}, cb) {
        const result = await reqShopInfo()
        if(result.code===0) {
        const info = result.data
        info.score = 3.5
        commit(RECEIVE_INFO, {info})
        cb && cb()
        }
        },
        async getShopRatings({commit}, cb) {
            const result = await reqShopRatings()
if(result.code===0) {
const ratings = result.data
commit(RECEIVE_RATINGS, {ratings})
cb && cb()
}
},
// 异步获取商家商品列表
async getShopGoods({commit},callback) {
const result = await reqShopGoods()
if(result.code===0) {
const goods = result.data
commit(RECEIVE_GOODS, {goods})
// 数据更新之后，通知组件.所以在这里设置一个回调函数
callback && callback()
}
},
// 同步action不需要跟后台进行交互
updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
        commit(INCREMENT_COUNT_FOOD,{food})
    }else{
        commit(DECREMENT_COUNT_FOOD,{food})
    }

},
// 同步清空购物车
clearCart({commit}){
    commit(CLEAR_CART)
},

async searchShops({commit, state}, keyword) {

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },

}