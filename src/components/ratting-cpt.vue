<template>
    <div id="ratting-cpt">
        <div class="ratting-content" v-show="this.rattingFood.length>0">
             <div>
                 <li class="ratting-item" v-for="item,index in rattingFood">
                     <div class="item-left"><span>{{item.fncJrnlId}}</span><span>{{item.ctrId}}</span></div>
                     <div class="item-right"><span>{{item.fncJrnlId}}</span><span>{{item.ctrId}}</span></div>
                 </li>
             </div>
         </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
        rattingFood:{
            type:Array,
            default(){
                return{
                }
            }
        }
    }
})
</script>
<style lang="stylus">
#ratting-cpt
 position relative
 left 0
 top 0
 width 100%

</style>
