<template>
  <div id="helloWorld">
    <div class="hello-wrap">
        <div class="icon"><img width="57px" height="57px" src="./brand@3x.png" alt="1"></div>
        <div class="hello-center" v-if="this.fncData.length>0">
          <div class="hello-title">
            <span class="hello-icon"></span>
            <span class="title-text">{{fncData[0].cstNm}}--{{fncData[0].cstId}}</span>
          </div>
          <div class="songda">
            {{fncData[1].cstNm}}///{{fncData[1].cstId}}---{{fncData[2].cstNm}}
          </div>
          <div class="manjian">
            <span class="manjian-icon"></span>
            <span class="manjian-text">{{fncData[2].cstNm}}--{{fncData[2].cstId}}</span>
          </div>
        </div>
        <div class="genduo" @click.stop.prevent="show()"><span>5个</span></div>
    </div>
    <div class="gonggao">
      <span class="gao-icon"></span>
      <span class="gao-text">的发货登记客服号地块，ID附近的开个会的很反感。带蝴蝶结韩国代购。地方环境都很反感的。发到客户的计划公开答复
        的会计法很快的火锅店否的看法你肯定很高。
      </span>
      <span class="gao-hao">&#62</span>
    </div>
    <div class="routers">
       <router-link class="item-router" to="/good">商品</router-link>
       <router-link  class="item-router" to="/ratting">评论</router-link>
       <router-link  class="item-router" to="/seller">商家</router-link>
    </div>
    <div class="footer"><footer></footer></div>
    <transition name="star">
    <div class="star-content" v-show="showStar">
     <div class="star-wrap">
       <div class="star-top"  v-if="this.fncData.length>0">
         <p class="star-name">{{fncData[0].cstNm}}--{{fncData[0].cstId}}</p>
         <star :sorce="sorce"></star>
       </div>
       <div class="star-line">
         <span class="line"></span>
         <span class="text">优惠信息</span>
         <span class="line"></span>
       </div>
       <div class="tubiao" v-if="this.fncData.length>0">
         <ul>
           <li class="star-item" v-for="item,index in iconData">
             <span class="star-icon" :class="imgMap[index]"></span><span>{{item.cstNm}}</span>
           </li>
         </ul>
       </div>
       <div class="star-line">
         <span class="line"></span>
         <span class="text">商家公告</span>
         <span class="line"></span>
       </div>
       <div class="seller-text">
         你是电脑卡死。开始到华盛顿，U盾输入呼和回复。大姐夫的脚本是代表度，贷款和粉底回地方法规。圣诞节还是说
         调查局发货的后果ID将覆盖，点击发货到合肥客户的。代发货的空间规划的。答复更好地发挥的价格
       </div>
       <div class="close" @click.stop.prevent="close()">关闭</div>
     </div>
    </div>
    </transition>
  </div>
</template>

<script>
import {getBizFnc} from  '../../utils/getPostData'
import star from './star'
import Footer from './footer'
export default {
  data () {
    return {
     fncData:[],
     iconData:[],
     showStar:false,
     sorce:3.5
    }
  },
  mounted(){
      this.fetchData();
  },
  created() {
      this.imgMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee','decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
  methods:{
    fetchData(){
      var _this=this
       getBizFnc().then((res)=>{
         if(res.status=='200'){
           _this.fncData=res.data
           if(res.data.length>0){
            //  res.data.forEach(element => {
            //     _this.iconData.push(element)
            //  });
            for(let i=0;i<5;i++){
               _this.iconData.push(res.data[i])
            }
           }
          
         }
          if(res.status=='1'){
          console.log("数据访问失败！"+res.msg)
         }
       })
    },
    show(){
      this.showStar=true
    },
    close(){
       this.showStar=false
    }
  },
  components:{
    star,
    footer:Footer
  }
}
</script>
<style lang="stylus">
#helloWorld
 position absolute
 left 0
 top 0
 width 100%
 background rgba(7,17,27,0.5)
 color rgb(255,255,255)
 z-index 20
 .hello-wrap
  padding 24px 12px 18px 24px
  display flex
  .icon
   flex 0 0 57px
  .hello-center
   margin-top 2px 
   margin-left 16px
   .hello-title
    display flex
    .hello-icon
      width 24px
      height 18px
      background-image url('./brand@3x.png')
      background-size 24px 18px
    .title-text
      font-size 16px
      font-weight 700
      margin-left 6px
   .songda
     font-size 12px
     margin-top 8px
     display flex
    .manjian
     display flex
     margin-top 10px
     .manjian-icon
      width 12px
      height 10px
      background-image url('./brand@3x.png')
      background-size 12px 10px
     .manjian-text
      font-size 10px  
      margin-left 4px
  .genduo
   position absolute
   right 12px
   bottom 86px
   font-size 10px
   line-height 24px
   width 48px
   height 24px
   background-color rgba(0,0,0,0.2)
   border-radius 16px
   cursor pointer
 .gonggao
  display flex
  width 100%
  height 28px
  background-color rgba(7,17,27,0.2)
  padding 0px 12px
  font-size 10px
  line-height 28px
  .gao-icon
   flex 0 0 20px
   width 20px
   height 18px
   background-image url('./bulletin@2x.png')
   background-size 20px 18px
   background-position-y 10px
  .gao-text
   flex 1
   overflow hidden
   white-space nowrap
   text-overflow ellipsis
  .gao-hao
   flex 0 0 40px
   margin-left 4px
 .routers
  width 100%
  height 40px
  background #fff
  display flex
  line-height 40px
  border-bottom 1px solid rgba(7,17,27,0.1)
  .item-router
   flex 1
   font-size 14px
   text-align center
   color rgb(77,85,93)
   text-decoration none
   &:hover
     color rgb(240,20,20)
 .star-content
  position absolute
  top 0px
  left 0px
  width 100%
  background rgba(7,17,27,0.8)
  &.star-enter-active,&.star-leave-active
    transition all .3s 
    background rgba(7,17,27,0.8)
  &.star-enter,&.star-leave-to
    background rgba(7,17,27,0)
  .star-wrap
   width 100%
   padding-top 64px
   padding-bottom 32px
   color rgb(255,255,255)
   .star-top
    font-size 16px
    font-weight 700
   .star-line
    display flex
    width 100%
    margin-top 28px
    padding 0 36px
    .line
     flex 0 0 112px
     border-bottom 1px solid rgba(255,255,255,0.2)
     position relative
     top -8px
    .text
     font-size 14px
     font-weight 700
     margin 0 12px
   .tubiao
    margin-top 24px
    .star-item 
     list-style none
     font-size 12px
     font-weight 200
     display flex
     .star-icon
      felx 0 0 28px
      width 16px
      height 16px
      background-size 16px 16px
      margin-bottom 12px
      margin-right 6px
      margin-left 12px
      &.decrease
        background-image url('./decrease_1@2x.png')
      &.discount
        background-image url('./discount_2@3x.png')
      &.guarantee
        background-image url('./guarantee_1@2x.png')
      &.invoice
        background-image url('./invoice_1@2x.png')
      &.special
        background-image url('./special_1@2x.png')
   .seller-text
    font-size 12px
    line-height 24px
    padding 0 30px
    margin-top 24px
   .close
    margin-top 60px
</style>
