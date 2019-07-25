<template>
    <div id="ratting">
        <home></home>
        <div id="rating-wrap">
            评价
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
#rating-wrap
 position absolute
 left 0
 top 174px
 bottom 46px
 width 100%
 background red
</style>
