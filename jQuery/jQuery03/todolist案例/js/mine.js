$(function () {
    $('#title').on({
        keydown: function (e) {
            if (e.keyCode === 13) {
                if ($(this).val().trim() === '') {
                    alert('你要干啥呀')
                } else {
                    var data = $(this).val()
                    var obj = {
                        title: data,
                        flag: false
                    }
                    var getData = get()
                    getData.push(obj)
                    set(getData)
                    load()
                    $(this).val('')
                }
            }
        }
    })

    function set(arr) {
        window.localStorage.setItem('todoList', JSON.stringify(arr))
    }
    function get() {
        var get = window.localStorage.getItem('todoList')
        if (get === null) {
            return []
        } else {
            return JSON.parse(get)
        }
    }
    load()
    function load() {
        var count = 0
        var uncount = 0
        var ol = $('#todolist')
        var ul = $('#donelist')
        ol.empty()
        ul.empty()
        var li 
        var arr = get()
        $.each(arr,function(i,ele) {
            if (ele.flag) {
                li = `
                <li>
                <input type='checkbox' checked></input>
                <p>${ele.title}</p>
                <a href='javascript:;' id='${i}'></a>
                </li>
                `
                ul.append(li)
                uncount++
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
        $('#donecount').html(uncount)
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
        if (this.checked) {
            data[i].flag = true
        }else {
            data[i].flag = false
        }
        set(data)
        load()
    })

})