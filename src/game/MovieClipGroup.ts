/**
 * MvoieClipGroup
 * 加载公共方法封装
 */
class MovieClipGroup extends eui.Group {
    public nameFactory:egret.MovieClipDataFactory; //MovieClip工厂 
    public mc1:egret.MovieClip; //MovieClip 实例

    public constructor(source: string, status: string) {
        super()
        var data = RES.getRes(source+"_json");
        var txtr = RES.getRes(source+"_png");
        this.nameFactory = new egret.MovieClipDataFactory( data, txtr );
        this.mc1 = new egret.MovieClip( this.nameFactory.generateMovieClipData( status) );
    }

    //返回实例
    public get Mc():egret.MovieClip{
        return this.mc1
    }

    //返回实例
    public plays(count: number = 1){
        this.mc1.play(count);
    }

    //设置位置坐标
    public position(x: number | 0, y: number | 0){
        this.mc1.x = x
        this.mc1.y = y
    }
    
    //设置状态
    public set status(name: string){
        this.mc1.movieClipData = this.nameFactory.generateMovieClipData(name);
        this.mc1.play(1);
    }

}