//当页面加载完成后再来执行里面的代码
window.addEventListener('load', function () {
    //获取元素
    var preview_img = document.querySelector('.preview_img')
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    //当鼠标经过大盒子时需要将mask和big盒子显示出来
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    //离开时隐藏
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none'
        big.style.display = 'none'
    })
    //给大盒子添加鼠标移动的事件
    preview_img.addEventListener('mousemove', function (e) {
        //获取鼠标在盒子里的位置
        var x = e.pageX - this.offsetLeft
        var y = e.pageY - this.offsetTop
        //获取mask盒子的宽度
        var maskWidth = mask.offsetWidth
        // console.log(maskWidth);
        //
        var maskMoveX = x - maskWidth / 2
        var maskMoveY = y - maskWidth / 2
        //
        var maskMaxMoveX = preview_img.offsetWidth - maskWidth
        var maskMaxMoveY = preview_img.offsetHeight - maskWidth
        //
        if (maskMoveX < 0) {
            maskMoveX = 0
        } else if (maskMoveX > maskMaxMoveX) {
            maskMoveX = maskMaxMoveX
        }
        if (maskMoveY < 0) {
            maskMoveY = 0
        } else if (maskMoveY > maskMaxMoveY) {
            maskMoveY = maskMaxMoveY
        }

        mask.style.left = maskMoveX + 'px'
        mask.style.top = maskMoveY + 'px'
        var bigImg = document.querySelector('.bigImg')
        var bigMax = bigImg.offsetWidth - big.offsetWidth
        var bigX = maskMoveX * bigMax / maskMaxMoveX
        var bigY = maskMoveY * bigMax / maskMaxMoveY
        bigImg.style.left = -bigX + 'px'
        bigImg.style.top = -bigY + 'px'
    })

})