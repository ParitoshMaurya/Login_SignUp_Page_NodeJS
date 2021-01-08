var express = require('express');
var router = express.Router();
var knex = require('../database/connection');
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/update_reg',(req,res)=>{
    if(req.session.email){
      var new_name=req.body.name;
      var new_pass=req.body.password;
      var c_new_pass=req.body.cpassword;
      if(new_pass==c_new_pass){
        var new_hash_password=bcrypt.hashSync(new_pass,10);
        knex('user_info').where({'email':req.session.email}).update({'name':new_name,'password':new_hash_password}).then(()=>{
          knex.select('*').from('user_info').where({'name':new_name}).then((rows)=>{
            var token=jwt.sign({"name":rows[0].name,"email":rows[0].email,"password":rows[0].password},"Paritosh");
            res.cookie("Key",token);
            req.session.flag=6;
            res.redirect('/home')});
          }); }else{
          req.session.flag=7;
          res.redirect('/home');
        } }; });
        
module.exports=router;