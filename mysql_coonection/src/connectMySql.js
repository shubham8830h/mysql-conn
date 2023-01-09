const mySql = require("mysql2");

const con = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root",
  database: "studentdata",
});


con.connect((err)=>{
  if (err) {
    throw err
  }
  else{
    console.log("My Sql DataBase Connected.....")
  }
})


// con.connect(function(err){
//   if (err)  throw err
//   // else return console.log("Mysql Connected....")
// con.query("select * from student",function(error,result){
//   if (error) throw error;
//   console.log(result)
// })
// })

module.exports=con