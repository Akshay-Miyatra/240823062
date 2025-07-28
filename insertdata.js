const mysql  = require('mysql')
const connection  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node'
})
connection.connect((err)=>{
    if(err)
    {
        console.error('connection error',err.stack)
        stack
    }
    console.log('connected as id'+connection.threadId)

    const user  = {name:'Mihir',age:22}
    const sql = 'insert into student set ?'

    connection.query(sql,user,(err,result)=>{
        if(err) throw err
        console.log('1 record inserted id ',result.insertId)
        connection.end()     
    })
})