class Socker extends eui.Component{
    public scokerMove: egret.tween.TweenGroup;
    public socker: eui.Label;
    public constructor() {
          super();
          this.skinName = "resource/skins/Socker.exml";
          this.plays()
    }
    public plays(){
        this.scokerMove.play(1)
    }
    public set sockernum(value:number){
        this.socker.text = '-' + value.toString();
    }
    public set positionX(value:number){
        this.socker.x = value;
    }
}
