//路由处理函数模块

//导入数据库操作模块
const db = require('../db/index')

//这是获取文章分类列表的处理函数 
exports.getArtCates = (req,res) => {
    // res.send('ok')
    //定义sql语句
    const sql = 'select * from ev_artice_cate where is_delete=0 order by id asc'
    //执行
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        res.send({
            status : 0,
            msg : '获取文章分类数据成功',
            data : results
        })
    })
}
//新增文章分类的处理函数
exports.addArticleCates = (req,res)=>{
    // res.send('ok')
    //定义sql语句
    const sql = 'select * from ev_artice_cate where name=? or alias=?'
    //执行语句
    db.query(sql,[req.body.name,req.body.alias],(err,results)=>{
        //判断是否失败
        if(err) return res.cc(err)
        //判断数据的length 
        if(results.length === 2) return res.cc('分类名称与分类别名被占用')
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与分类别名被占用')
        if(results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用')
        if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用')
        //分类名称和别名都可用，执行添加
        //定义插入的sql语句
        const sqlStr = 'insert into ev_artice_cate set ?'
        db.query(sqlStr,req.body,(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('新增文章分类失败')
            res.cc('新增文章分类成功',0)
        })
    })
}
//删除文章分类的处理函数
exports.deleteCateById = (req,res)=>{
    // res.send('ok')
    // 定义sql语句
    const sql = 'update ev_artice_cate set is_delete=1 where id=?'
    //执行
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('删除文章分类失败')
        res.cc('删除文章分类成功',0)
    })
}
// 根据id获取文章分类的处理函数
exports.getArtCateById = (req,res)=>{
    // res.send('ok')
    //定义sql语句
    const sql = 'select * from ev_artice_cate where id=?'
    //执行sql语句
    db.query(sql,req.params.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('获取文章分类数据失败')
        res.send({
            status : 0,
            msg : '获取文章分类成功',
            data : results[0]
        })
    })
}
//根据id更新文章分类的处理函数
exports.updateCateById = (req,res) =>{
    // res.send('ok')
    //定义sql语句
    const sql = 'select * from ev_artice_cate where Id<>? and (name=? or alias=?)'
    //执行sql语句
    db.query(sql,[req.body.Id,req.body.name,req.body.alias],(err,results)=>{
        //执行sql语句失败
        if(err) return res.cc(err)
        //判断4种情况
        if(results.length === 2) return res.cc('分类别名与名称被占用，请更换后再试')
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类别名与名称被占用，请更换后再试')
        if(results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后再试')
        if(results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后再试')
        // res.send('ok')
        //定义sql语句
        const sql = 'update ev_artice_cate set ? where Id=?'
        //执行sql语句
        db.query(sql,[req.body,req.body.Id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !==1) return res.cc('更新文章分类失败')
            res.cc('更新文章分类成功',0)
        })

    })
} 