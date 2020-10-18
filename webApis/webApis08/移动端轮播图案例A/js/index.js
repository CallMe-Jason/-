window.addEventListener('load', function () {
    var focus = document.querySelector('.focus')
    var ul = focus.children[0]
    var ol = focus.children[1]
    var focusWidth = focus.offsetWidth
    var index = 0
    var timer = setInterval(function () {
        index++
        var translateX = -index * focusWidth
        ul.style.transition = 'all .5s'
        ul.style.transform = `translateX(${translateX}px)`
    }, 1500)
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0
            ul.style.transition = 'none'
            var translateX = -index * focusWidth
            ul.style.transform = `translateX(${translateX}px)`
        } else if (index < 0) {
            index = 2
            ul.style.transition = 'none'
            var translateX = -index * focusWidth
            ul.style.transform = `translateX(${translateX}px)`
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })
    var startX = 0;
    var moveX = 0; 
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;

        clearInterval(timer);
    });
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;

        var translatex = -index * focusWidth + moveX;
       
        ul.style.transition = 'none';
         ul.style.transform = `translateX(${translatex}px)`
        e.preventDefault(); 
    })
    ul.addEventListener('touchend', function(e) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * focusWidth;
                ul.style.transition = 'all .5s';
                 ul.style.transform = `translateX(${translatex}px)`
            } else {
                var translatex = -index * focusWidth;
                ul.style.transition = 'all .5s';
                 ul.style.transform = `translateX(${translatex}px)`
            }
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * focusWidth;
            ul.style.transition = 'all .5s';
             ul.style.transform = `translateX(${translatex}px)`
        }, 1500);
    });
    var goBack = document.querySelector('.goBack')
    var nav = document.querySelector('nav')
    window.addEventListener('scroll',function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block'
        }else {
            goBack.style.display = 'none'
        }
    })
    goBack.addEventListener('click',function() {
        window.scroll(0,0)
    })
})