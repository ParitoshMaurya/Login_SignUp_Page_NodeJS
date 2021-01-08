var knex=require('knex')({
    client:'mysql',
    connection: {
      host:'localhost',
      user:'root',
      password:'Paritosh@123',
      database:'user'
    }
  
  });

module.exports=knex;