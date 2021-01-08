var express = require('express');
var router = express.Router();

router.get('/logout',(req,res)=>{
    if(req.session.email){
      res.clearCookie('Key')
      req.session.flag=8;
      res.redirect('/');}
   
  });

module.exports=router;