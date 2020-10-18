$(function(){
    $('#title').keydown(function(e){
        if (e.keyCode === 13) {
           if ($(this).val().trim() === '') {
               alert('你要干啥子')
           }else {
               var data = $(this).val()
               var obj = {
                   title : data,
                   flag : false
               }
               var getData = get()
               getData.push(obj)
               set(getData)
               load()
           }
        $(this).val('')
        }
        console.log(getData);
    })

function set(one){
    window.localStorage.setItem('todoList',JSON.stringify(one))
}
function get(){
    var data = window.localStorage.getItem('todoList')
    if (data === null) {
        return[]
    }else {
        return JSON.parse(data)
       
    }
}
load()
function load(){
    var li = ''
    var count = 0
    var unCount = 0
    var ol = $('#todolist')
    var ul = $('#donelist')
    ol.empty()
    ul.empty()
    var arr = get()
    $.each(arr,function(i,ele){
        if (ele.flag) {
            li = `
            <li>
            <input type='checkbox' checked></input>
            <p>${ele.title}</p>
            <a href='javascript:;' id='${i}'></a>
            </li>
            `
            ul.append(li)
            unCount++
        }else {
            li = `
            <li>
            <input type='checkbox'></input>
            <p>${ele.title}</p>
            <a href='javascript:;' id='${i}'></a>
            </li>
            `
            ol.append(li)
            count++
        }
    })
    $('#todocount').html(count)
    $('#donecount').html(unCount)

}
$('ul,ol').on('click','a',function(){
    var i = $(this).attr('id')
    var data = get()
    data.splice(i,1)
    set(data)
    load()
})
$('ul,ol').on('click','input',function(){
    var i = $(this).siblings('a').attr('id')
    var data = get()
    console.log(this);
    if (this.checked) {
        data[i].flag = true
    }else {
        data[i].flag = false
    }
    set(data)
    load()
})
// console.log($('#title'));
})