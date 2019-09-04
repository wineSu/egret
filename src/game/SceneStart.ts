
/**
 * start page
 */
class SceneStart extends Scene{
    private tip:eui.Group;                 //提示按键
    private tit:eui.Group;                 //标题
    private niu:eui.Group;                 //怪兽位置组
    private stuScene:eui.Group;            //守卫位置组
    private raremcFactory:MovieClipGroup;  //MovieClip工厂  怪兽
    private raremc: egret.MovieClip;       //MovieClip  怪兽
    private blueRaremc: MovieClipGroup;    //MovieClip  小怪兽
    private redRaremc: MovieClipGroup;     //MovieClip  小怪兽
    private pros:eui.Image;                //血条类
    private uiTotalWid: number = 127;       //ui中的血条宽度
    private totalSocker:number;            //总血量
    private everyBlood:number;             //每次攻击掉血
    private socker:eui.Group;              //分数组
    public time: egret.tween.TweenGroup;   //倒计时
    public stumcArr: StuList[];            //学生实例集合
    public globalPointNiu: egret.Point;    //怪兽世界坐标
    public djs: eui.Label;                 //顶部倒计时展示时间
    public endFlag: boolean;               //是否结束动画标识
    public stuList: (Object | null)[];     //学生列表
    public teacherInfor: eui.Group;        //老师头像
    public teacherName: eui.Label;         //学生姓名
    public frieSound:egret.Sound;          //攻击声音
    public attackedSound:egret.Sound;      //被攻击声音
    public startSound:egret.Sound;         //倒计时声音

    public constructor() {
        super();
        this.skinName = 'resource/skins/SceneStartSkin.exml';
    }
    protected onComplete() {
        //加载动画中...
        this.time.play()
        this.time.addEventListener('complete', this.onTweenGroupComplete, this);
        
        //怪兽渲染
        this.raremcFactory = new MovieClipGroup('testNiu', 'wait');
        this.raremc = this.raremcFactory.Mc;
        this.niu.addChild(this.raremc);
        //小怪兽
        this.blueRaremc = new MovieClipGroup('blueRaremc', 'wait');
        this.blueRaremc.position(320, 30);
        
        //小怪兽
        this.redRaremc = new MovieClipGroup('redRare', 'wait');
        this.redRaremc.position(40, 340);
        if(window['isCrazy']){
            this.niu.addChild(this.blueRaremc.Mc);
            this.niu.addChild(this.redRaremc.Mc);
        }
        
        callJsFunc((data)=>{

            //获取当前学生和老师信息
            let stuData: Object = JSON.parse(data).data;
            this.stuList = (stuData as any).studentlist;
            // this.stuList = [
            //     {"studentuid":"10000404","nickname":"\u5f20\u6c38\u5bbe"},  
            //     {"studentuid":"12740442","nickname":"\u718a\u5b69\u5b50"}
            // ]
            let teacher: (Object | null)[] = (stuData as any).teacherinfo;
            //添加老师信息
            this.teacherName.text = teacher["name"] || '' +'老师';
            //老师头像
            let url = teacher['avatar'];
            let imgLoader = new egret.ImageLoader();
            imgLoader.crossOrigin = "anonymous";// 跨域请求
            imgLoader.load(url);// 去除链接中的转义字符‘\’        
            imgLoader.once(egret.Event.COMPLETE, (evt: egret.Event) => {
                if (evt.currentTarget.data) {
                    let texture = new egret.Texture();
                    texture.bitmapData = evt.currentTarget.data;
                    let bitmap = new egret.Bitmap(texture);
                    bitmap.width = 140;
                    bitmap.height = 140;
                    this.teacherInfor.addChild(bitmap);
                    this.teacherInfor.setChildIndex(bitmap, 0)
                }
            }, this);

            //添加学生
            this.addStudents();
            //声音加载
            // this.frieSound = RES.getRes("frie_mp3");
            // this.attackedSound = RES.getRes("attacked_mp3");
            // this.startSound = RES.getRes("start_mp3");
            // this.startSound.play(0, 1);
            startSound();
        })
        
        //初始数据
        let getinit:any = getInitParam();
        this.everyBlood = getinit.every;
        this.totalSocker = getinit.total;

        //怪兽动作监听
        this.raremc.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
           if(e.frameLabel == 'curend'){
               if(this.endFlag){
                //    this.changeStatues('die')
               }else{
                   this.changeStatues('wait')
                   this.rarePaly()
               }
           }
        },this);

        //js回调  攻击
        this.stage.addEventListener("jsNotifyts",this.doTsPlay,this);
        //游戏结束
        this.stage.addEventListener("gameEndCallback",this.doGameEnd,this);
        
    }

    //监听攻击  用户触发
    public doTsPlay(){
        this.goPlay()
    }
    public doGameEnd(){
        this.endFlag = true;
        this.changeStatues('die');
        let prosTw = egret.Tween.get( this.pros );
        prosTw.to( {
            width: 0
        }, 200 );
    }

    //3s  倒计时完成
    private onTweenGroupComplete(): void {
        //渲染界面
        this.rarePaly()
        //开启30s倒计时
        this.djsTimer()
        //关闭提示按键
        this.tip.scaleX = 0;
        this.tit.scaleX = 0;
        playBg();
    }

    //30s倒计时
    private djsTimer(){
        let timeObj: egret.DisplayObject = this.djs.$children[1];
        let count:number = 30;
        let timer:egret.Timer = new egret.Timer(1000,30);
        timer.addEventListener(egret.TimerEvent.TIMER,onTimer,this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,onTimerComplete,this);
        timer.start();
        function onTimer(evt:egret.TimerEvent):void {
            count--;
            timeObj['text'] = '00:'+ (count > 9 ? count : "0" + count);
        }
        function onTimerComplete(evt:egret.TimerEvent):void {
            this.doGameEnd()
        }
    }
    
    //渲染学生
    private addStudents(){
        //怪兽局部坐标  局部中心为观察点
        let niuPointer:any = {
            x: this.raremc.x + this.raremc.width,
            y: this.raremc.y + this.raremc.height/2
        };
        //怪兽全局坐标
        const globalPointNiu: egret.Point = this.raremc.localToGlobal(niuPointer.x, niuPointer.y);
        //守卫者添加
        let stumcArr:StuList[] = [];
        
        for(var i = 0, len = this.stuList.length; i< len; i++){
            let stu: StuList = new StuList()
            this.stuScene.addChild(stu);
            stumcArr.push(stu);
            let item:StuList = stumcArr[i];
            //计算 y 坐标
            item.y = 100 * Math.floor(i/3);
            //计算 x 坐标
            item.x = 100 * ((i+1) % 3);
            item.labelName = this.stuList[i]['nickname']

            //攻击者局部坐标
            let stuPointer:Object = {
                x: item.x + item.width/2,
                y: item.y + item.height/2
            };
            //攻击者世界坐标
            let globalPointStu: egret.Point = this.stuScene.localToGlobal(stuPointer["x"], stuPointer["y"]);
            (stumcArr[i] as any).globalPointStu = globalPointStu;
            //攻击者距离目标的距离（ x水平 y垂直 ）
            let pointer: Object = {
                clientx: Math.abs(globalPointStu.x - globalPointNiu.x),
                clienty: globalPointNiu.y - globalPointStu.y
            };
            (stumcArr[i] as any).pointer = pointer;
            //计算角度
            let degree = Math.atan((pointer as any).clienty/(pointer as any).clientx) * 180 / Math.PI;
            (stumcArr[i] as any).degree = degree;
            //添加攻击者武器对象池
            let pool:ObjectPool = ObjectPool.getPool("bullet","name"+i,6,'0xFF0000',globalPointStu,pointer,degree);
            (stumcArr[i] as any).pool = pool;
        }
        this.stumcArr = stumcArr;
        this.globalPointNiu = globalPointNiu;
        
        // setInterval(()=>{
        //     this.goPlay()
        // },2000)
    }

    //攻击
    public goPlay(){
        if(this.endFlag){
            return false
        }
        frieSound(false);
        let totalSocker:number = this.totalSocker; //真实血条宽度
        let uiTotalWid:number = this.uiTotalWid;   //ui中的血条宽度
        let everyBlood:number = this.everyBlood;   //真实掉血量
        let uiBlood: number = uiTotalWid / totalSocker * everyBlood; //视觉掉血量
        if(this.uiTotalWid < 5){
            this.uiTotalWid = 5
        }
        this.uiTotalWid -= uiBlood;

        let stumcArr = this.stumcArr;
        let index:number = Math.round(Math.random()*(stumcArr.length-1));
        stumcArr[index].plays();
        //对象池中取出 
        var bulletObj = (stumcArr[index] as any).pool.getObject('0xFF0000',(stumcArr[index] as any).globalPointStu,(stumcArr[index] as any).pointer,(stumcArr[index] as any).degree);
        //移动注册 添加碰撞回调
        bulletObj.move(this.globalPointNiu,()=>{
            frieSound(true);
            //回收
            (stumcArr[index] as any).pool.returnObject(bulletObj);
            if(!this.endFlag){
                this.changeStatues('cur')
            }
            let prosTw = egret.Tween.get( this.pros );
            //计算视觉掉血量 totalSocker / (this.totalSocker - this.everyBlood) = ? / this.everyBlood
            prosTw.to( {
                width: this.uiTotalWid
            }, 200 );
            let sockerObj: Socker = new Socker();
            sockerObj.sockernum = this.everyBlood + Math.round(Math.random());
            sockerObj.positionX = Math.round(Math.random() * 20) + 5;
            this.socker.addChild(sockerObj);
        })
        //避免重复添加
        if(!this.contains(bulletObj)){
            this.addChild(bulletObj);
        }
    }

    //攻击过程中怪兽的状态改变
    private changeStatues(name:string){
        this.raremcFactory.status = name
        this.blueRaremc.status = name
        this.redRaremc.status = name
    }

    private rarePaly(){
        this.raremcFactory.plays(-1)
        this.blueRaremc.plays(-1)
        this.redRaremc.plays(-1)
    }

}
