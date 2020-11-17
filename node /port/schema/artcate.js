//导入
const joi = require('@hapi/joi')

//定义name和alias的验证规则
const name = joi.string().required()
const alias = joi.string().alphanum().required()

const id = joi.number().integer().min(1).required()

//暴露
exports.add_cate_schema = {
    body : {
        name,
        alias
    }
}
exports.delete_cate_schema = {
    params : {
        id
    }
}
// 验证规则对象
exports.get_cate_schema = {
    params : {
        id,
    }
}
exports.update_cate_schema = {
    body : {
        Id : id,
        name,
        alias
    }
}