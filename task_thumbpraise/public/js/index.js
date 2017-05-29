let f='';
//声明父类，PraiseButton
class PraiseButton {
    constructor(el, num) {
        //el为点击事注册元素，num为初始化点击次数
        this.el = el;
        this.num = num;
    }
    clickEvent() {
        //给el绑定click事件，使用箭头函数,自动绑定了this
        this.el.click(() => {
            if (f) {
                clearTimeout(f);
            }
            f = setTimeout(() => {
                clearTimeout(timer);
                $('#thumb').addClass('praise');
                this.num = add(this.num);
                axios.get('/index/update')
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                $($('.add1')[0]).html('+' + this.num);
                $($('.add1')[0]).show();
                var timer = setTimeout(() => {
                    $('#thumb').removeClass('praise');
                    $($('.add1')[0]).hide();
                }, 3000);
            }, 800);
        });
    }
}

//创建子类,praise，继承父类PraiseButton
class praise extends PraiseButton {
    constructor(el, num) {
        super(el, num);
    }
}

//输出模块praise
export default { praise };
