class Bao extends eui.Component{
    private bg:eui.Group;
    public constructor() {
          super();
          this.skinName = "resource/skins/Bao.exml";

          //小怪兽
            let redRaremc = new MovieClipGroup('bao', 'wait');
            this.bg.addChild(redRaremc.Mc);
            redRaremc.plays(1)
    }
    
}
