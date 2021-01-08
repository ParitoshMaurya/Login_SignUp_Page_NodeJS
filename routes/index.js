var express = require('express');
var router = express.Router();
var knex = require('../database/connection');
var bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.Key){
    res.redirect('/home')
  }else{
  if(req.session.flag==1){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Email Already Exists',flag:1});

  }else if(req.session.flag==2){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Registered Successfully',flag:0});

  }else if(req.session.flag==3){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Confirm Password Does not match',flag:1});

  }else if(req.session.flag==4){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Incorrect Email or Password Enetred',flag:1});
  }else if(req.session.flag==5){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Account Deleted Successfully',flag:0});

  }else if(req.session.flag==8){
    req.session.destroy();
    res.render('index',{title:'Login-Signup',message:'Logout Successfully',flag:0});
  }
  else{
  res.render('index', { title: 'Login-Signup' });};}
});



router.get('/home',(req,res)=>{
  if(req.cookies.Key){
    var fetched_obj=jwt.verify(req.cookies.Key,"Paritosh");
    req.session.email=fetched_obj.email;
    req.session.name=fetched_obj.name;
    if(req.session.email){
    if(req.session.flag==6){
      res.render('home',{popup:'Info Updated Successfully',message:'Welcome, '+ req.session.name +'. Your mail is, '+ req.session.email,flag:0});
    }else if(req.session.flag==7){
      res.render('home',{popup:'Confirm Password Does not match',message:'Welcome, '+ req.session.name +'. Your mail is, '+ req.session.email,flag:1});
    };
    res.render('home',{message:'Welcome, '+ req.session.name +'. Your mail is, '+ req.session.email});}}
  else{
    res.render('index',{title:'Login-Signup',message:'You need to Login First.',flag:1});
    res.redirect('/')
  }
});


module.exports = router;
