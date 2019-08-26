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
var Socker = (function (_super) {
    __extends(Socker, _super);
    function Socker() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/Socker.exml";
        _this.plays();
        return _this;
    }
    Socker.prototype.plays = function () {
        this.scokerMove.play(1);
    };
    Object.defineProperty(Socker.prototype, "sockernum", {
        set: function (value) {
            this.socker.text = '-' + value.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Socker.prototype, "positionX", {
        set: function (value) {
            this.socker.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Socker;
}(eui.Component));
__reflect(Socker.prototype, "Socker");
