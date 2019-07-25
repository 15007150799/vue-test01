var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const DB_URL='mongodb://127.0.0.1:27017/scf';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('mongo connect success!');
})

const bizCstBscinf=mongoose.model('bizCstBscInf',new mongoose.Schema({
  cstNm:{type:String,require:true},
  cstId:{type:String,require:true},
  orgCode:{type:String},
  ctrPsn:{type:String},
  cstRltvSn:{type:String},
  fax:{type:String}
}))
const bizFncBscinf=mongoose.model('bizFncBscInf',new mongoose.Schema({
  cstNm:{type:String,require:true},
  cstId:{type:String,require:true},
  fncJrnlId:{type:String},
  ctrId:{type:String},
  pdNm:{type:String},
  ctrAmt:{type:Number},
  ctrCcyCd:{type:String},
  fncModCd:{type:Number},
  id:{type:Number}
}))

bizFncBscinf.create({
  cstNm:'4444集团',
  cstId:'KHBH9999170610000004',
  fncJrnlId:'RZBH9999170610000014',
  ctrId:'YHTSQ99991706100003',
  pdNm:'保兑仓',
  ctrAmt:10000000.00,
  ctrCcyCd:'CNY',
  fncModCd:1,
  id:101
},function(err,doc){
  if(err){
    console.log("数据保存失败！")
  }else{
    console.log(doc)
  }
})

bizCstBscinf.create({
  cstNm:'1111集团',
  cstId:'HBH9999170610000001',
  orgCode:'34545565656333-3',
  ctrPsn:'superadmin',
  cstRltvSn:'15001750789',
  fax:'9999'
},function(err,doc){
  if(err){
    console.log("数据保存失败！")
  }else{
    console.log(doc)
  }
})
router.get('/bizCst',function(req,res,next){
 
   bizCstBscinf.find({},function(err,doc){
     res.json(doc)
   })
})
router.get('/bizFnc',function(req,res,next){
  bizFncBscinf.find({},function(err,doc){
    console.log("api="+doc)
    res.json(doc)
  })
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
