<template>
    <div id="ratting">
        <home></home>
        <div id="rating-wrap">
            评价
            <img @click="ceshi()"  width="100px" height="100px"  :src="imgSignSrc" alt="1"/>
            <canvasVue  @imgSignSrc="getImgSignSrc"></canvasVue>
            <div v-show="showSign"><img  width="200px" height="200px" :src="showSignImgSrc" alt="1" /></div>
             <div class="line"></div>
             <div v-show="showSignMethod"><img  width="200px" height="200px" :src="showSignImgSrcMethod" alt="1" /></div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import home from './HelloWorld'
import canvasVue from './Canvas'
import {mapGetters} from 'vuex'
// import {}
export default Vue.extend({
    data(){
        return{
        imgSignSrc:'',
        // showSign:'',
        // showSignImgSrc:''
        }
    },
    components:{
        home,
       canvasVue
    },
    methods:{
         getImgSignSrc(msg){
             this.imgSignSrc=msg
            // console.log("d",this.imgSignSrc)
            // this.$on('imgSignSrc',function(d){
            //     console.log("d",d)
            //     this.imgSignSrc=d
            // })
        },
        ceshi(){
            console.log(this.$store)
        alert("mapGetters"+this.$store.state.showSign)
        }
    },
    computed:{
       ...mapGetters([
           'showSign',
           'showSignImgSrc'
       ]),
       showSignMethod(){
          return this.$store.state.showSign;//store.getters['showSign']
       },
       showSignImgSrcMethod(){
          return this.$store.state.showSignImgSrc;//store.getters['showSignImgSrcMethod']
       }
    },
    // watch:{
    //      ...mapGetters([
    //        'showSign',
    //        'showSignImgSrc'
    //    ])
    // }
})
</script>
<style lang="stylus">
#rating-wrap
 position absolute
 left 0
 top 174px
 bottom 46px
 width 100%
 .line
  width 100%
  height 20px
  background rgba(7,17,27,0.4)
</style>
