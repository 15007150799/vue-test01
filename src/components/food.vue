<template>
<transition name="food">
 <div id="food" v-show="foodShow" ref="food">
   <div class="food-top">
     <span class="back" @click.stop.prevent="back()">&#9668</span>
     <img class="img-class" :src="setFood.imgSrc" alt="1" width="100%" height="376px"/>
      <div class="top-first">
          <div class="first-left">
              <p class="first-name">{{setFood.fncJrnlId}}</p>
              <p class="fncId">{{setFood.ctrId}}</p>
              <p class="money">￥28 <span class="money1">￥24</span></p>
          </div>
          <span class="first-right" @click.stop.prevent="increase(setFood)">加入购物车</span>
      </div>
      <div class="food-line"></div>
      <div class="good-introduct">
          <p class="introduct-title">商品介绍</p>
          <p class="introduct-text">的股份大股东。ID见覅国家队将，的发货几点回家读后感，
              贷款放款的好几个的价格。地方高科技的价格肯德基。京东方髋关节的反馈结果的。
              一打飞机给大家发个ID建国门。。点击发货公开的结果对方，贷款纠纷和高科技的更好地给，
              快递费借记卡几点几分该节点，订房卡的几个地方。京东方能够对你的恐惧感，打开就发给你打开
          </p>
      </div>
      <div class="food-line"></div>
      <div class="good-introduct">
         <p class="introduct-title">商品评价</p> 
         <div class="ratting">
             <div class="ratting-text">全部<span class="ratting-data">57</span></div>
             <div  class="ratting-text">推荐<span class="ratting-data">27</span></div>
             <div  class="ratting-text">吐槽<span class="ratting-data">10</span></div>
         </div>
         <div class="ratting-icon">
             <span class="icon"></span><span>只看有内容的评价</span>
         </div>
         <rattingCpt :rattingFood="selectFoods"></rattingCpt>
      </div>
   </div>
 </div>
</transition>
</template>
<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
import rattingCpt from './ratting-cpt'
export default Vue.extend({
    data(){
        return{
            foodShow:false
        }
    },
    props:{
         setFood:{
            type:Object
        },
        selectFoods:{
            type:Array
        }
    },
    components:{
        rattingCpt
    },
    methods:{
        show(){
            this.foodShow=true
            this.$nextTick(()=>{
                this._ScrollFoodDiv()
            })
        },
        back(){
            this.foodShow=false 
        },
        _ScrollFoodDiv(){
            if(!this.scrollfooddiv){
                this.scrollfooddiv=new BScroll(this.$refs.food,{click:true})
            }
        },
        increase(item){
            let cunFlag=true
             this.selectFoods.forEach(element => {
               if(element.fncJrnlId===item.fncJrnlId){
                   element.count+=1
                   cunFlag = false
                   return
               }
             })
            if(cunFlag){
                Vue.set(item,'count',1)
                this.selectFoods.push(item)
            }
            this.$emit('getSelectFoods',this.selectFoods);
            alert("加入购物车成功！")
        }
    },
    computed:{

    }
})
</script>
<style lang="stylus">
#food
 position absolute
 left 0
 top 0
 width 100%
 bottom 46px
 background #ffffff
 z-index 20
 &.food-enter-active,&.food-leave-active
   transition all 0.3s linear 
   transform translate3d(0,0,0)
   opacity 1
 &.food-enter,&food-leave-to
   transform translate3d(100%,0,0)
   opacity 0
 .food-top
  width  100%
  .img-class
   display inline-block
   width 100%
   height 376px
  .back
   position absolute
   left 8px
   top 8px
   font-size 16px
   cursur poniter
  .top-first
   padding 18px
   display flex
   .first-left 
     flex 1
    .first-name
     display flex
     font-size 14px
     color rgb(7,17,27)
     font-weight 700
    .fncId
     display flex
     font-size 10px
     color rgb(147,153,159)
    .money
     display flex
     font-size 14px
     color rgb(240,20,20)
     .money1
      font-size 10px
      color rgb(147,153,159) 
      text-decoration line-through
   .first-right
    flex 0 0 74px
    width 74px
    height 24px
    background #3399ff
    border-radius 12px
    color #ffffff
    font-size 10px
    line-height 24px
  .food-line
   width 100%
   height 16px
   background #f3f5f7
   border 1px solid rgba(7,17,27,0.1)
   border-left none 
   border-right none
  .good-introduct
    padding 18px
   .introduct-title
    display flex
    font-size 16px
    color rgb(7,17,27)
   .introduct-text
    display flex
    line-height 24px
    margin 0 8px
    font-size 12px
    color rgb(77,85,93)
   .ratting
    display flex
    color #ffffff
    padding-bottom 18px
    border-bottom 1px solid rgba(7,17,27,0.1)
    .ratting-text 
     padding 8px 12px
     background rgb(0,160,220)
     font-size 12px
     margin-left 8px
    .ratting-data
      font-size 8px
</style>

