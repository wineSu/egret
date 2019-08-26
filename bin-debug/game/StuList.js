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
var StuList = (function (_super) {
    __extends(StuList, _super);
    function StuList() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/StuList.exml";
        return _this;
    }
    StuList.prototype.plays = function () {
        this.stuPeo.play(1);
    };
    Object.defineProperty(StuList.prototype, "labelName", {
        set: function (name) {
            this.stuname.text = name;
        },
        enumerable: true,
        configurable: true
    });
    return StuList;
}(eui.Component));
__reflect(StuList.prototype, "StuList");
