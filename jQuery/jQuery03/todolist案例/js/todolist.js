$(function(){
    //获取输入框元素,注册on事件
    //当键盘按下去的时候，判断按下去的是不是回车
$('#title').on({
    keydown:function(e){
        if(e.keyCode === 13) {

            //是的话则获取输入框的内容，并判断是否为空
            if($(this).val().trim().length === 0) {
                alert('请输入值')//为空时提示输入数值
            }else {
                //不为空时获取到他
                // console.log($(this).val());
                var data = $(this).val().trim()//获取内容
                var obj = {//创建一个对象来存两个数据，一个是我们输入的内容，一个是来判断是否完成
                    txt : data,
                    flag : false
                }
                var getData = get()//把函数返回的包含对象的数组赋值给getData
                getData.push(obj)
                // window.localStorage.setItem('todoList',JSON.stringify(getData))
                set(getData)//调用存储函数将数组存进本地缓存
                //把新的数据存到本地缓存中，转化成JSON格式的字符串
                load()//存完数据之后调用渲染函数
                $(this).val('')//存完数据之后清空输入框
            }
        }
    }
    
})

function set(arr) {
    window.localStorage.setItem('todoList',JSON.stringify(arr)) //把新的数据存到本地缓存中，转化成JSON格式的字符串
}
//获取本地缓存中存储的数据，如果为空则给一个空数组，以存储接下来输入的数据（对象）
function get() {
    var stroageData = window.localStorage.getItem('todoList')
    if (stroageData === null) {
        return []
    }else {
        return JSON.parse(stroageData)//返回包含一个对象的数组
    }
}

load()
// 渲染本地数据到窗口
function load () {
    var count = 0
    var uncount = 0
    //获取要渲染的父对象
    var ol = $('#todolist')
    var ul = $('#donelist')
    //调用获取数据的函数并赋值
    var arr = get()
    ol.empty()//清空下面上一次添加的li
    ul.empty()
    // console.log(arr);
    var li = ''
    $.each(arr,function(i,ele) {//遍历数组
        // console.log(ele.flag);
        if (ele.flag) {//判断数组里每一个对象的flag的值 //若为true则把获取到的值添加到已完成的列表里去
            li = `
            <li>
            <input type='checkbox' checked>
            <p>${ele.txt}</p>
            <a href='javascript:;' id='${i}'></a>
            </li>
            `
            ul.append(li)
            uncount++
        }else {//若为false则把获取到的值添加到未完成的列表里去
            li = `
            <li>
            <input type='checkbox' >
            <p>${ele.txt}</p>
            <a href='javascript:;' id='${i}'></a>
            </li>
            `
            ol.append(li)
            count++
        }
    })
    $('#todocount').html(count)
    $('#donecount').html(uncount)

}
//删除
$('ul,ol').on('click','a',function(){
    var i = $(this).attr('id')//把a的索引号拿到然后赋值给i
    var data = get()
    // console.log(data[i]);
// console.log(get());
    data.splice(i,1)
// console.log(data);
set(data)
load()
})

// 打勾时添加到ul里
$('ul,ol').on('click','input',function(){
    var i = $(this).siblings('a').attr('id')//拿到索引号
    var data = get()//获取数组
    if(this.checked) {//判断点击的那个有没有被选中
        data[i].flag = true//有的话更改里面的flag
    }else {
        data[i].flag = false
    }
    set(data)//更新数据
    load()//重新渲染
})









})

// JSON.parse()是把一个JSON字符串转换成一个JS对象
// JSON.stringify()把一个JS对象转换成JSON格式的字符串