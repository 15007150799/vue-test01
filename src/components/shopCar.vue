<template>
  <div id="shopCar"  >
      <div class="shop-content" @click.stop.prevent="tigger()">
        <div class="shop-icon">
          <span class="icon">&#9785</span><span class="icon-text">￥{{totalPrice}}</span>
       </div>  
       <span class="text">另需送费￥{{songPrice}}</span>
       <span class="text-end">￥{{minPrice}}起送</span>
      </div>
      <transition name="shopCar">
      <div  v-show="shopCarFlag"  class="car-list" >
          <div class="mask-list"></div>
          <div class="car-wrap">
            <div  class="car-title"> <span>购物车</span><span class="car-empty">清空</span></div>
            <div class="car-food-list" v-if="this.selectFoods.length>0"  ref="carFoodList">
             <div>
              <li    class="car-item"     style="list-style:none" v-for="item,index in this.selectFoods">
                <span class="carfood-name">{{item.fncJrnlId}}</span>
                <span class="car-controll"><carControll :food="item"></carControll></span>
              </li>
             </div>
            </div>
          </div>
        
      </div>
      </transition>
   </div>   
</template>
<script>
import Vue from 'vue'
import carControll from './carControll'
import BScroll from 'better-scroll'
export default Vue.extend({
  data(){
     return{
       shopCarFlag:false
     }
  },
  props:{
    selectFoods:{
      type:Array
    },
    minPrice:{
      type:Number
    },
    songPrice:{
      type:Number
    }
  },
  computed:{
    totalPrice(){
      let price=0
      if(this.selectFoods.length>0){
         this.selectFoods.forEach(element => {
           if(element.ctrAmt !=null && element.ctrAmt >0){
              price +=element.ctrAmt *element.count
           }
         });
      }
      return price
    }
  },
  components:{
   carControll
  },
  methods:{
    tigger(){
        if(this.selectFoods!=null && this.selectFoods.length>0){
           this.shopCarFlag=!this.shopCarFlag
       }
       if(this.shopCarFlag){
         this.$nextTick(()=>{
           this._shopScroll()
         })
       }
    },
    _shopScroll(){
      if(!this.shopCarScroll){
         this.shopCarScroll=new BScroll(this.$refs.carFoodList,{click:true})
      }
    }
  }
    
})
</script>
<style lang="stylus">
#shopCar
 position fixed
 bottom 0
 left 0
 width 100%
 height 46px
 z-index 50
 .shop-content
  display flex
  background #141d27
  font-size 0px
  color rgba(255, 255, 255, 0.4)
  line-height 46px
  .shop-icon
   flex-direction row
   margin-left 18px
   font-size 47px
   .icon-text
     flex-direction row
     font-size 16px
     line-height 60px
     padding 0 18px
     border-right 1px solid rgba(255,255,255,0.1)
  .text
    font-size 16px
    margin-left 12px
  .text-end
    flex-direction row-reverse
    background rgba(255,255,255,0.1)
    width 105px
    font-size 12px
 .car-list
  position absolute
  left 0px
  width 100%
  bottom 46px
  &.shopCar-enter-active,&.shopCar-leave-active
    transition all .5s 
    transform translate3d(0,0,0)
    opacity 1
  &.shopCar-enter,&.shopCar-leave-to
    opacity 0
    transform translate3d(0,200px,0)
  .car-wrap
   overflow hidden
   width 100%
   max-height 260px
   min-height 0px
   font-size 0px
   .car-title
    display flex
    width 100%
    height 40px
    background #f3f5f7
    padding 0 18px
    font-size 14px
    color rgb(7,17,27)
    font-weight 200
    line-height 40px
    .car-empty
     flex-direction row-reverse
     color rgb(0,160,220)
     font-size 12px
   .car-food-list
    background #ffffff
    padding 0px 18px
    .car-item
     list-style none 
     border-bottom 1px solid  rgb(7,17,27,0.1)
     height 48px
     margin-right 18px
     display flex
     .carfood-name
      flex-direction row
      font-size 14px
      color rgb(7,17,27)
      line-height 48px
     .car-controll
      flex-direction row-reverse
      justify-content center
  .mask-list
   width 100%
   height 800px
   background rgba(7,17,27,0.4)
</style>