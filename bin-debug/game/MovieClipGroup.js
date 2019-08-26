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
 * MvoieClipGroup
 * 加载公共方法封装
 */
var MovieClipGroup = (function (_super) {
    __extends(MovieClipGroup, _super);
    function MovieClipGroup(source, status) {
        var _this = _super.call(this) || this;
        var data = RES.getRes(source + "_json");
        var txtr = RES.getRes(source + "_png");
        _this.nameFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.mc1 = new egret.MovieClip(_this.nameFactory.generateMovieClipData(status));
        return _this;
    }
    Object.defineProperty(MovieClipGroup.prototype, "Mc", {
        //返回实例
        get: function () {
            return this.mc1;
        },
        enumerable: true,
        configurable: true
    });
    //返回实例
    MovieClipGroup.prototype.plays = function (count) {
        if (count === void 0) { count = 1; }
        this.mc1.play(count);
    };
    //设置位置坐标
    MovieClipGroup.prototype.position = function (x, y) {
        this.mc1.x = x;
        this.mc1.y = y;
    };
    Object.defineProperty(MovieClipGroup.prototype, "status", {
        //设置状态
        set: function (name) {
            this.mc1.movieClipData = this.nameFactory.generateMovieClipData(name);
            this.mc1.play(1);
        },
        enumerable: true,
        configurable: true
    });
    return MovieClipGroup;
}(eui.Group));
__reflect(MovieClipGroup.prototype, "MovieClipGroup");
