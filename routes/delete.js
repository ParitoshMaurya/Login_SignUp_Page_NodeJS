var express = require('express');
var router = express.Router();
var knex = require('../database/connection');

router.get('/delete',(req,res)=>{
    if(req.session.email){
      knex('user_info').where({'email':req.session.email}).del().then(()=>{
        res.clearCookie('Key')
        req.session.flag=5;
        res.redirect('/');
      });
    };
  });

module.exports=router;