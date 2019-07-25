<template>
 <div id="star">
  <span v-for="itemClass in itemClasses" class="item-class" :class="itemClass"></span>
 </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
        sorce:{
            type:Number
        }
    },
    computed:{
       itemClasses(){
           let result=[]
           for(let i=0;i<this.sorce;i++){
               result.push("on")
           }
           let scorlen=Math.floor(this.sorce*2)
           if(scorlen%2==1){
              result.push("half")  
           }
           console.log(result)
           return result
       } 
    }
    
})
</script>
<style lang="stylus">
#star
 display flex
 font-size 0px
 .item-class
  display inline-block
  &.on
    width 24px
    height 24px
    background-image url('./star24_on@2x.png')
    background-size 24px 24px
    margin-left 22px
  &.half
    width 24px
    height 24px
    background-image url('./star24_half@2x.png')
    background-size 24px 24px
    margin-left 22px
  &:last-child
    margin-left none
</style>