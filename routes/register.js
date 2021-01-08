const express = require("express");
const router = express.Router();
const knex=require("../database/connection");
const bcrypt = require('bcrypt');

router.post('/auth_reg',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var cpassword=req.body.cpassword;
    if(password==cpassword){
      knex.select('*').from('user_info').where({'email':email}).then((rows)=>{if(rows.length>0){
        req.session.flag=1;
        res.redirect('/');
      }
      else{
        var hashpassword = bcrypt.hashSync(password,10);
        knex('user_info').insert({'name':name,'email':email,'password':hashpassword}).then(()=>{
        req.session.flag=2;
        res.redirect('/');
        }).catch(console.log('error'))
  
      };});
    }else{
      req.session.flag=3;
      res.redirect('/');
    };
  
  });

  module.exports=router;