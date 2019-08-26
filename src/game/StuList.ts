class StuList extends eui.Component{
    public stuPeo: egret.tween.TweenGroup;
    public stuname: eui.Label; //学生姓名
    public constructor() {
          super();
          this.skinName = "resource/skins/StuList.exml";
    }
    public plays(){
        this.stuPeo.play(1)
    }
    public set labelName(name: string){
        this.stuname.text = name
    }
    // public playAnimation(target:egret.tween.TweenGroup,isLoop:boolean):void{
    //     if(isLoop)
    //     {
    //         for(var key in target.items)
    //         {
    //             target.items[key].props = {loop:true};
    //         }
    //     }
    //     target.play();
    // }
}
