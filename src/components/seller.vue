<template>
    <div id="seller">
        <home></home>
        <div id="seller-wrap">
            商家
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import home from './HelloWorld'
export default Vue.extend({
    data(){
        return{

        }
    },
    components:{
        home
    }
})
</script>
<style lang="stylus">
#seller-wrap
 position absolute
 left 0
 top 174px
 bottom 46px
 width 100%
 background red
</style>
