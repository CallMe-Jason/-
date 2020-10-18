/**
 * 让盒子移动
 * @param {*} obj 要移动的对象
 * @param {*} targetPosition 移动的距离
 */
function animate(obj, targetPosition) {
    //清除多余的定时器
    clearInterval(obj.timer)
    //添加定时器
    obj.timer = setInterval(function () {
        //声明步数，达成缓速
        var step = (targetPosition - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        //判断正负给向上或者向下取整
        // step = targetPosition > obj.offsetLeft ? step : -step
        //如果盒子的位置离目标位置相等
        if (obj.offsetLeft == targetPosition) {
            //清除定时器
            return clearInterval(obj.timer)
        }
        //否则继续走
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 15)
}

