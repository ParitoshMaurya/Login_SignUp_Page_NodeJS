var express = require('express');
var router = express.Router();
var knex = require('../database/connection');
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');


// Login method
router.post('/auth_login',(req,res)=>{
    var email=req.body.email;
    var password = req.body.password;
    // var sql = 'SELECT * FROM user_info WHERE email=?;';
    knex.select('*').from('user_info').where({'email':email}).then((rows)=>{
      if(rows.length && bcrypt.compareSync(password,rows[0].password)){
        var token=jwt.sign({"name":rows[0].name,"email":rows[0].email,"password":rows[0].password},"Paritosh");
        res.cookie("Key",token)
        console.log(req.cookies.Key)
        req.session.email = email;
        req.session.name = rows[0].name;
        res.redirect('/home')
      }else{
        req.session.flag=4;
        res.redirect('/');
      };});
  
  });

module.exports=router;
  