<template>
<div>
   <home></home>
    <div id="good" >
        <div class="title-warp" v-if="this.titleData.length>0" ref="titleWrap">
            <div style="list-style:none" >
                <li style="list-style:none"   class="good-item" v-for="item,index in titleData" >
                 <span v-show="index % 3==0" class="good-icon"></span><span class="good-text">{{item.cstNm}}</span>
               </li>
            </div>
        </div>
        <div class="food-wrap" v-if="this.foodData.length>0" ref="foodWrap">
            <div style="list-style:none" >
                <li style="list-style:none"  class="food-title-item" v-for="item,index in foodData">
                  <div><span  class="food-title"> {{item.cstNm}}</span>
                      <div>
                          <li style="list-style:none"  class="food-content-item" v-for="item,index in foodData" @click.stop.prevent="selectFood(item,index)" >
                             <img class="food-img" width="64px" height="64px" :src="classMap[index]" alt="1">
                             <div class="content-name">
                                 <div class="fncId">{{item.fncJrnlId}}</div>
                                 <div class="ctrId">{{item.ctrId}}</div>
                                 <div class="ctrId">月售2311份<span>好评率22%</span></div>
                                 <div class="money">￥28<span class="money1">￥24</span></div>
                             </div>
                             <div class="carControll"><carControll :selectFoods="selectFoods"  :food="item"></carControll></div>
                          </li>
                      </div>
                  </div>
                </li>
            </div>
        </div>
    </div>
    <shopCar :selectFoods="selectFoods" :songPrice="songPrice" :minPrice="minPrice"></shopCar>
    <food :setFood="setFood" ref="food"></food>
</div>
</template>
<script>
import Vue from 'vue'
import home from './HelloWorld'
import {getBizFnc,getBizCst} from '../../utils/getPostData'
import BScroll from 'better-scroll'
import shopCar from './shopCar'
import carControll from './carControll'
import food from './food'
export default ({
    data(){
        return{
          titleData:[],
          foodData:[],
          classMap:[],
          minPrice:30,
          songPrice:2,
          setFood:{}
        }
    },
    mounted(){
        this._fetchData()
    },
    components:{
        home,
        shopCar,
        carControll,
        food
    },
    created() {//('http://www.nipic.com/show/4/141/9617157.html')  跨域不行
        this.classMap = [require('./brand@2x.png'),require('./guarantee_1@3x.png'),require('./brand@3x.png'),require('./special_2@2x.png'),require('./decrease_1@2x.png'),require('./brand@2x.png'),
      require('./bulletin@3x.png'),require('./brand@2x.png'),require('./guarantee_2@3x.png'),require('./invoice_1@2x.png'),require('./decrease_1@2x.png'),require('./brand@2x.png'),require('./brand@2x.png'),
      require('./bulletin@3x.png'),require('./brand@2x.png'),];
      },
    methods:{
        _fetchData(){
            var _this=this
            getBizFnc().then((res)=>{
                if(res.status=='200'){
                   this.titleData=res.data
                   this.foodData=res.data
                   this.$nextTick(()=>{
                       this._scrollTitle()
                   })
                }
            }).catch((err)=>{
                console.log("查询失败!"+err)
            })
            // getBizCst().then((res)=>{
            //     if(res.status=='200'){
            //        this.titleData=res.data
            //     }
            // }).catch((err)=>{
            //     console.log("查询失败!"+err)
            // })
        },
        _scrollTitle(){
            this.scrolltitle=new BScroll(this.$refs.titleWrap,{click:true})
            this.foodscroll=new BScroll(this.$refs.foodWrap,{click:true})
        },
        selectFood(item,index){
           this. setFood=item
           Vue.set(this.setFood,'imgSrc',this.classMap[index])
           this.$refs.food.show()
        }
    },
    computed:{
       selectFoods(){
           let resultData=[]
           this.foodData.forEach(element => {
              if(element.count !=null && element.count>0){
                   resultData.push(element)
              }
            });
            return resultData
       }
    }
    
})
</script>
<style lang="stylus">
#good
 position absolute 
 top 174px
 left 0px
 width 100%
 bottom 46px
 overflow hidden
 display flex
 .title-warp
  flex 0 0 80px
  width 80px
  background #f3f5f7
  .good-item
   display flex
   height 54px
   font-size 0px
   margin 0px 12px
   border-bottom 1px solid rgba(7,17,27,0.1)
   line-height 14px
   &:last-child
     border-bottom none
   .good-icon
    flex-direction row
    width 16px
    height 12px
    background-image url('./brand@3x.png')
    background-size 16px 12px
    margin-top 10px
   .good-text
    flex-direction row
    font-size 12px
    margin-left 4px
 .food-wrap
   flex 1
  .food-title-item
   width 100%
   color rgb(147,153,159)
   font-size 12px
   .food-title
    display flex
    width 100%
    height 26px
    line-height 26px
    border-left 4px solid #d9dde1
    background #f3f5f7
    padding-left 14px
   .food-content-item
    margin  18px
    border-bottom 1px solid #d9dde1
    display flex
    padding-bottom 18px
    &:last-child
     border-bottom none
     margin-bottom 0px
    .food-img
     width 64px
    .content-name
     margin-left 10px
     .fncId
      display flex
      font-size 14px
      color rgb(7,17,27)
     .ctrId
      display flex
      margin-top 8px
     .money
      display flex
      margin-top 8px
      font-size 14px
      color rgb(240,20,20)
      .money1
       font-size 10px
       text-decoration line-through
       vertical-align middle
       color rgb(7,17,27)
       margin-left 8px
    .carControll
     flex-direction row-reverse
     width 84px
     margin-top 70px
     margin-right 10px
</style>
