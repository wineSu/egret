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
var Bao = (function (_super) {
    __extends(Bao, _super);
    function Bao() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/Bao.exml";
        //小怪兽
        var redRaremc = new MovieClipGroup('bao', 'wait');
        _this.bg.addChild(redRaremc.Mc);
        redRaremc.plays(1);
        return _this;
    }
    return Bao;
}(eui.Component));
__reflect(Bao.prototype, "Bao");
