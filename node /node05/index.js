//导入
const mysql = require('mysql')

//建立连接
const db = mysql.createPool({
	host : '127.0.0.1',
  user : 'root',
  password : 'admin123',
  database : 'base'
})


//测试
// db.query('select 1',(err,results)=>{
// 	if(err) return console(err.message)
//   console.log(results)
// })


//查询users表中所有的数据
// db.query('select * from users',(err,results) =>{
//     if(err) return console.log(err.message)
//     console.log(results)
// })

//插入数据
// const user = { username : 'Iron-Man',password : 'pcc321'}
// const sqlStr = 'INSERT INTO users (username,password) VALUES(?,?)'
// db.query(sqlStr,[user.username,user.password],(err,results) =>{
// if(err) return console.log(err.message)
//   if(results.affectedRows === 1) {console.log('插入数据成功')}
// })

// 插入数据简便方式
// const user = { username : 'America-Man',password : 'pcc321'}
// //待执行的SQL语句，其中的？表示占位符
// const sqlStr = 'INSERT INTO users SET ?'
// //直接将数据对象当作占位符的值
// db.query(sqlStr,user,(err,results) =>{
// if(err) return console.log(err.message)//失败
//   if(results.affectedRows === 1) {console.log('插入数据成功')}//成功
// })


//更新数据
// const user = {id : 7,username : 'aaa',password : '000'}
// //要执行的SQL语句
// const sqlStr = 'UPDATE users SET username=?,password=? WHERE id=?'
// //调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的位置
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
// 	if(err) return console.log(err.message)//失败
//   if(results.affectedRows === 1) {console.log('更新数据成功')}//成功
// })


//更新数据的便捷方式
// const user = {id : 4, username : 'aaaa', password : '0000'}
// //要执行的SQL语句
// const sqlStr = 'UPDATE users SET ? WHERE id=?'
// //调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的位置
// db.query(sqlStr,[user,user.id],(err,results)=>{
// 	if(err) return console.log(err.message)//失败
//   if(results.affectedRows === 1) {console.log('更新数据成功')}//成功
// })


//通过id删除数据
// const sqlStr = 'DELETE FROM users WHERE id=?'
// //调用db.query()执行SQL语句的同时，为占位符指定具体的值
// //注意：如果语句中有多个占位符，则必须使用数组为每个占位符指定具体的值。
// //如果只有一个占位符，则可以省略数组
// db.query(sqlStr,1,(err,results) => {
// if(err) return console.log(err.message)	//失败
//   if(results.affectedRows === 1) {console.log('删除数据成功')}//成功
// })


//使用delete语句会真正的把数据删除，推荐使用标记删除的形式来模拟删除的动作，就是设置类似于status这样的状态字段来标记这条语句是否被删除。
//当用户执行了删除的动作时，我们并没有执行DELETE语句把数据删除掉，而是执行了UPDATE语句，标记为删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,6],(err,results)=>{
if(err) return console.log(err.message)
  if(results.affectedRows===1)
    console.log('标记删除成功')
})