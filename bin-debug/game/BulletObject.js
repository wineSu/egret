var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 武器类
 */
var bullet = (function (_super) {
    __extends(bullet, _super);
    function bullet(color, point, a, r) {
        var _this = _super.call(this) || this;
        _this.a = a;
        //创建纹理图
        var data = RES.getRes("zd_json");
        var txtr = RES.getRes("zd_png");
        _this.bulFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.bulletObj = new egret.MovieClip(_this.bulFactory.generateMovieClipData("zd"));
        _this.bulletObj.x = point.x - 100;
        _this.bulletObj.y = point.y;
        _this.bulletObj.rotation = -r;
        _this.addChild(_this.bulletObj);
        _this.bulletObj.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e) {
            if (!_this.initflag) {
                //结束一颗子弹的生命
                _this.initflag = true;
                _this.init();
                _this.callback();
            }
        }, _this);
        return _this;
    }
    //移动
    bullet.prototype.move = function (targetPoint, callback) {
        this.bulletObj.gotoAndPlay('fall', -1);
        this.targetPoint = targetPoint;
        this.callback = callback;
        this.initflag = false;
        this.scaleX = 1;
        this.bullet_move(); //每创创建一个bullet就移动
    };
    //初始化
    bullet.prototype.init = function () {
        this.x = 0;
        this.y = 0;
        this.scaleX = 0;
        this.flag = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    //执行动作
    bullet.prototype.frame = function () {
        //碰撞检测
        var isHit = this.hitTestPoint(this.targetPoint.x + 25, this.targetPoint.y + 25);
        if (isHit && !this.flag) {
            //爆炸效果
            this.flag = true;
            this.bulletObj.gotoAndPlay('move', -1);
        }
        this.x -= 30;
        // //比值求y点
        var y = ((-this.x) * this.a.clienty / this.a.clientx);
        this.y = y;
    };
    //监听执行
    bullet.prototype.bullet_move = function () {
        //每刷新一帧子弹移动
        this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    return bullet;
}(eui.Group));
__reflect(bullet.prototype, "bullet");
