/**
 * 武器类
 */
class bullet extends eui.Group{
    private a: Object;
    private targetPoint: Object;
    private callback: Function;
    private bulFactory:egret.MovieClipDataFactory; //MovieClip工厂  子弹
    private bulletObj:egret.MovieClip; //MovieClip  子弹
    private flag: Boolean; //碰撞后的标识
    private initflag: Boolean; //初始化标识

    public constructor(color: number, point:any, a:Object, r: number){   //构造函数
        super();  //继承
        this.a = a;
        //创建纹理图
        let data = RES.getRes("zd_json");
        let txtr = RES.getRes("zd_png");
        this.bulFactory = new egret.MovieClipDataFactory( data, txtr );
        this.bulletObj = new egret.MovieClip(this.bulFactory.generateMovieClipData("zd"));
        this.bulletObj.x = point.x-100;
        this.bulletObj.y = point.y;
        this.bulletObj.rotation = -r;
        this.addChild(this.bulletObj);
        this.bulletObj.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
            if(!this.initflag){
                //结束一颗子弹的生命
                this.initflag = true
                this.init();
                this.callback();
            }
        },this);
    }
    //移动
    public move(targetPoint: Object, callback: Function){
        this.bulletObj.gotoAndPlay('fall',-1);
        this.targetPoint = targetPoint;
        this.callback = callback;
        this.initflag = false
        this.scaleX = 1;
        this.bullet_move();   //每创创建一个bullet就移动
    }
    //初始化
    public init(){
        this.x = 0;
        this.y = 0;
        this.scaleX = 0;
        this.flag = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this)
    }
    //执行动作
    public frame(){
        //碰撞检测
        var isHit:boolean = this.hitTestPoint( (this.targetPoint as any).x + 25, (this.targetPoint as any).y + 25);
        if(isHit && !this.flag){
            //爆炸效果
            this.flag = true;
            this.bulletObj.gotoAndPlay('move',-1);
        }
        this.x -= 30;
        // //比值求y点
        let y:number = ((-this.x) * (this.a as any).clienty / (this.a as any).clientx);
        this.y = y;
    }
    //监听执行
    public bullet_move(){
        //每刷新一帧子弹移动
        this.addEventListener(egret.Event.ENTER_FRAME,this.frame,this);
    }
}


