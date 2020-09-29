import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // 添加进购物车
  addCart(context, payLoad) {
    // for(let item of state.cartList){
    //   if (item.iid === payLoad.iid){
    //     oldProduct = item;
    //   }
    // }
    // if(oldProduct){
    //   oldProduct.count += 1
    // }
    // else {
    //   payLoad.count = 1
    //   state.cartList.push(payLoad)
    // }

    // 1.查找之前数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payLoad.count = 1
      // context.state.cartList.push(payLoad)
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}
