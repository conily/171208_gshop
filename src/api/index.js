// 包含n个接口函数的名字,函数的返回值：promise对象
import axios from 'axios'
// 1、根据经纬度获取位置详情
export const  reqAddress=(geohash)=>ajax(`/position/${geohash}`)
// 以下这种写法是直接将geohash写到url的问号后面的（即query类型的参数）
// export const  reqAddress=(geohash)=>ajax(`/position/`,{geohash})


// 2、获取食品分类列表
export const  reqFoodTypes=()=>ajx('/index_category')


// 3、根据经纬度获取商铺列表
export const reqShops=({longitude,latitude})=>ajax('/shops',{longitude,latitude})

// 4、根据经纬度和关键字搜索商铺列表

// 5、获取一次性验证码

// 6、用户名密码登陆

// 7、发送短信验证码

// 8、手机号验证码登陆

// 9、根据会话获取用户信息

// 10、用户登出