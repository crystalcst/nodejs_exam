'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = '';
//声明父类，PraiseButton

var PraiseButton = function () {
    function PraiseButton(el, num) {
        _classCallCheck(this, PraiseButton);

        //el为点击事注册元素，num为初始化点击次数
        this.el = el;
        this.num = num;
    }

    _createClass(PraiseButton, [{
        key: 'clickEvent',
        value: function clickEvent() {
            var _this = this;

            //给el绑定click事件，使用箭头函数,自动绑定了this
            this.el.click(function () {
                if (f) {
                    clearTimeout(f);
                }
                f = setTimeout(function () {
                    clearTimeout(timer);
                    $('#thumb').addClass('praise');
                    _this.num = add(_this.num);
                    axios.get('/index/update').then(function (response) {
                        console.log(response);
                    }).catch(function (error) {
                        console.log(error);
                    });
                    $($('.add1')[0]).html('+' + _this.num);
                    $($('.add1')[0]).show();
                    var timer = setTimeout(function () {
                        $('#thumb').removeClass('praise');
                        $($('.add1')[0]).hide();
                    }, 3000);
                }, 800);
            });
        }
    }]);

    return PraiseButton;
}();

//创建子类,praise，继承父类PraiseButton


var praise = function (_PraiseButton) {
    _inherits(praise, _PraiseButton);

    function praise(el, num) {
        _classCallCheck(this, praise);

        return _possibleConstructorReturn(this, (praise.__proto__ || Object.getPrototypeOf(praise)).call(this, el, num));
    }

    return praise;
}(PraiseButton);

//输出模块praise


exports.default = { praise: praise };
