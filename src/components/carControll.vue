<template>
  <div id="carControll">
      <transition name="controll">
      <div class="controll-left" v-show="showAdd" @click.stop.prevent="decrease()">-</div>
      </transition>
      <span class="controll-data" v-show="showAdd">{{food.count}}</span>
      <div class="controll-right"  @click.stop.prevent="increase()">+</div>
  </div>  
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
        food:{
            type:Object
        }
    },
    data(){
        return{
          
        }
    },
    methods:{
     increase(){
        if(!this.food.count){
            Vue.set(this.food,'count',0)
        }
         this.food.count +=1


     },
     decrease(){
       if(!this.food.count || this.food.count==0 ){
            return
        }
        if(this.food.count && this.food.count>0 ){
            this.food.count +=-1
        }
     }
    },
    computed:{
        showAdd(){
            if(this.food.count && this.food.count>0 ){
                return true
            }else{
                return false
            }
        }
    }
})
</script>
<style lang="stylus">
#carControll
 display flex
 .controll-left
  flex 0 0 16px
  width 4px
  height 16px
  border 4px solid #3399ff
  border-radius 50%
  color  #3399ff 
  font-weight bold 
  font-size 20px
  line-height 12px
  &.controll-enter-active,&.controll-leave-active
    transition all 0.3s linear 
    transform  translate3d(0,0,0)
    opacity 1
  &.controll-enter,&.controll-leave-to
    transform  translate3d(24px,0,0)
    opacity 0
 .controll-data
  flex 0 0 40px
  width 40px
  font-size 10px
  color rgb(147,153,159)
  line-height 22px
 .controll-right
  flex 0 0 22px
  width 22px
  height 22px
  background #3399ff
  color #ffffff
  font-weight bold 
  font-size 20px
  border-radius 50%
</style>