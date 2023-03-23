const mysql=require('mysql2')
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Banarasi#0542",
    database:"expence"

})
module.exports=db;