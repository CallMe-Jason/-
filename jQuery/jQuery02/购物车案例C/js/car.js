//入口函数
$(function(){
//全选，全不选
//把checkall的状态赋值给三个小按钮
//事件使用change
$('.checkall').change(function(){
    //小按钮和下面的全选按钮，第一个prop是设置 第二个prop是获取
    $('.j-checkbox, .checkall').prop('checked',$(this).prop('checked'))
    if ($(this).prop('checked')) {
        $('.cart-item').addClass('check-cart-item')
    }else {
        $('.cart-item').removeClass('check-cart-item')
    }
    getSum()
})
//当小按钮都选中时全选按钮也选中
// 每次点击小按钮就来判断，如果选中的等于3，则选中全选
$('.j-checkbox').change(function(){
    var jCheckBoxCheckedLength = $('.j-checkbox:checked').length
    console.log(jCheckBoxCheckedLength);
    var jCheckBoxLength = $('.j-checkbox').length
    console.log(jCheckBoxLength);
    if (jCheckBoxCheckedLength === jCheckBoxLength){
        $('.checkall').prop('checked',true)
    }else {
        $('.checkall').prop('checked',false)
    }
    getSum()
})

//数量加减  价格变化
$('.increment').click(function(){
    var num = $(this).siblings('.itxt').val()
    num++
    $(this).siblings('.itxt').val(num)
    var p = $(this).parent().parent().siblings('.p-price').html()
    var p = p.substr(1)
    var res = (p * num).toFixed(2)
    $(this).parent().parent().siblings('.p-sum').text('¥' + res)
    getSum()
})
$('.decrement').click(function(){
    var num = $(this).siblings('.itxt').val()
    if (num == 1) {
        $(this).css('cursor','not-allowed')
        return;
    }
    num--
    $(this).siblings('.itxt').val(num)
    var p = $(this).parent().parent().siblings('.p-price').html()
    var p = p.substr(1)
    var res = parseFloat((p * num)).toFixed(2)

    $(this).parent().parent().siblings('.p-sum').text('¥' + res)
    getSum()
})
//手动修改数量计算价格
$('.itxt').change(function(){
    var num = $(this).val()
    var p = $(this).parents('.p-num').siblings('.p-price').text().substr(1)
    var res = (p * num).toFixed(2)
    $(this).parents('.p-num').siblings('.p-sum').text(`¥${res}`)
    getSum()
})
//合计
function getSum () {
    var count = 0
    var sum = 0
    var $carItem = $('.cart-item')
    $carItem.each(function(i,ele){
        if ($(ele).find('.j-checkbox').prop('checked')) {
            count += parseInt($(ele).find('.itxt').val())
            sum += parseFloat($(ele).find('.p-sum').text().substr(1))
        }
    })
    $('.amount-sum em').text(count)
    $('.price-sum em').text(`¥${sum.toFixed(2)}`)
}


// 删除商品
$('.p-action a').click(function(){
    if (window.confirm('确定要删除嘛？')) {
        $(this).parents(".cart-item").remove()
    }
    getSum()
})
//判断小复选框是否被选中以删除
$('.remove-batch').click(function(){
   if (window.confirm('确定选中删除嘛？')) {
    $('.j-checkbox:checked').parents(".cart-item").remove()
   }
    getSum()
})
//清理购物车
$('.clear-all').click(function(){
    if (window.confirm('确定全部删除嘛？')) {
        $('.cart-item').remove()
    }
    getSum()
})
//选中商品添加背景






})
