
const mysql=require('mysql')

const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1jb12me009',
    database:"employee"
})

conn.connect((err)=>{
    if(err){
        console.log("err");
    }
    else{
        console.log("Connected");
    }
})

module.exports=conn