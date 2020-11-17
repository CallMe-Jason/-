const path = require('path')
const db = require('../db/index')

exports.addArticle = (req,res) =>{
    // res.send('okko')
    // console.log(req.body);
    // console.log('----/------');
    // console.log(req.file);
    // res.send('ok')
    if(!req.file ||req.file.fieldname !== "cover_img") return res.cc('文章封面是必须参数')
    //证明数据是合法的进行下面的业务逻辑
    // res.send('ok')
    //处理文章的信息对象
    const articleInfo = {
        //标题，内容，发布内容，所属id
        ...req.body,
        cover_img : path.join('/uploads',req.file.filename),
        pub_date : new Date(),
        author_id : req.user.id
    }
    // console.log(articleInfo);
    //定义sql语句
    const sql = 'insert into ev_articles set ?'
    //执行
    db.query(sql,articleInfo,(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('发布新文章失败')
        res.cc('发布成功',0)
    })
}