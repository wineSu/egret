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
 * start page
 */
var SceneStart = (function (_super) {
    __extends(SceneStart, _super);
    function SceneStart() {
        var _this = _super.call(this) || this;
        _this.uiTotalWid = 127; //ui中的血条宽度
        _this.skinName = 'resource/skins/SceneStartSkin.exml';
        return _this;
    }
    SceneStart.prototype.onComplete = function () {
        var _this = this;
        //加载动画中...
        this.time.play();
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
        if (window['isCrazy']) {
            this.niu.addChild(this.blueRaremc.Mc);
            this.niu.addChild(this.redRaremc.Mc);
        }
        callJsFunc(function (data) {
            //获取当前学生和老师信息
            var stuData = JSON.parse(data).data;
            _this.stuList = stuData.studentlist;
            // this.stuList = [
            //     {"studentuid":"10000404","nickname":"\u5f20\u6c38\u5bbe"},  
            //     {"studentuid":"12740442","nickname":"\u718a\u5b69\u5b50"}
            // ]
            var teacher = stuData.teacherinfo;
            //添加老师信息
            _this.teacherName.text = teacher["name"] || '' + '老师';
            //老师头像
            var url = teacher['avatar'];
            var imgLoader = new egret.ImageLoader();
            imgLoader.crossOrigin = "anonymous"; // 跨域请求
            imgLoader.load(url); // 去除链接中的转义字符‘\’        
            imgLoader.once(egret.Event.COMPLETE, function (evt) {
                if (evt.currentTarget.data) {
                    var texture = new egret.Texture();
                    texture.bitmapData = evt.currentTarget.data;
                    var bitmap = new egret.Bitmap(texture);
                    bitmap.width = 140;
                    bitmap.height = 140;
                    _this.teacherInfor.addChild(bitmap);
                    _this.teacherInfor.setChildIndex(bitmap, 0);
                }
            }, _this);
            //添加学生
            _this.addStudents();
            //声音加载
            // this.frieSound = RES.getRes("frie_mp3");
            // this.attackedSound = RES.getRes("attacked_mp3");
            // this.startSound = RES.getRes("start_mp3");
            // this.startSound.play(0, 1);
            startSound();
        });
        //初始数据
        var getinit = getInitParam();
        this.everyBlood = getinit.every;
        this.totalSocker = getinit.total;
        //怪兽动作监听
        this.raremc.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e) {
            if (e.frameLabel == 'curend') {
                if (_this.endFlag) {
                    //    this.changeStatues('die')
                }
                else {
                    _this.changeStatues('wait');
                    _this.rarePaly();
                }
            }
        }, this);
        //js回调  攻击
        this.stage.addEventListener("jsNotifyts", this.doTsPlay, this);
        //游戏结束
        this.stage.addEventListener("gameEndCallback", this.doGameEnd, this);
    };
    //监听攻击  用户触发
    SceneStart.prototype.doTsPlay = function () {
        this.goPlay();
    };
    SceneStart.prototype.doGameEnd = function () {
        this.endFlag = true;
        this.changeStatues('die');
        var prosTw = egret.Tween.get(this.pros);
        prosTw.to({
            width: 0
        }, 200);
    };
    //3s  倒计时完成
    SceneStart.prototype.onTweenGroupComplete = function () {
        //渲染界面
        this.rarePaly();
        //开启30s倒计时
        this.djsTimer();
        //关闭提示按键
        this.tip.scaleX = 0;
        this.tit.scaleX = 0;
        playBg();
    };
    //30s倒计时
    SceneStart.prototype.djsTimer = function () {
        var timeObj = this.djs.$children[1];
        var count = 30;
        var timer = new egret.Timer(1000, 30);
        timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        timer.start();
        function onTimer(evt) {
            count--;
            timeObj['text'] = '00:' + (count > 9 ? count : "0" + count);
        }
        function onTimerComplete(evt) {
            this.doGameEnd();
        }
    };
    //渲染学生
    SceneStart.prototype.addStudents = function () {
        //怪兽局部坐标  局部中心为观察点
        var niuPointer = {
            x: this.raremc.x + this.raremc.width,
            y: this.raremc.y + this.raremc.height / 2
        };
        //怪兽全局坐标
        var globalPointNiu = this.raremc.localToGlobal(niuPointer.x, niuPointer.y);
        //守卫者添加
        var stumcArr = [];
        for (var i = 0, len = this.stuList.length; i < len; i++) {
            var stu = new StuList();
            this.stuScene.addChild(stu);
            stumcArr.push(stu);
            var item = stumcArr[i];
            //计算 y 坐标
            item.y = 100 * Math.floor(i / 3);
            //计算 x 坐标
            item.x = 100 * ((i + 1) % 3);
            item.labelName = this.stuList[i]['nickname'];
            //攻击者局部坐标
            var stuPointer = {
                x: item.x + item.width / 2,
                y: item.y + item.height / 2
            };
            //攻击者世界坐标
            var globalPointStu = this.stuScene.localToGlobal(stuPointer["x"], stuPointer["y"]);
            stumcArr[i].globalPointStu = globalPointStu;
            //攻击者距离目标的距离（ x水平 y垂直 ）
            var pointer = {
                clientx: Math.abs(globalPointStu.x - globalPointNiu.x),
                clienty: globalPointNiu.y - globalPointStu.y
            };
            stumcArr[i].pointer = pointer;
            //计算角度
            var degree = Math.atan(pointer.clienty / pointer.clientx) * 180 / Math.PI;
            stumcArr[i].degree = degree;
            //添加攻击者武器对象池
            var pool = ObjectPool.getPool("bullet", "name" + i, 6, '0xFF0000', globalPointStu, pointer, degree);
            stumcArr[i].pool = pool;
        }
        this.stumcArr = stumcArr;
        this.globalPointNiu = globalPointNiu;
        // setInterval(()=>{
        //     this.goPlay()
        // },2000)
    };
    //攻击
    SceneStart.prototype.goPlay = function () {
        var _this = this;
        if (this.endFlag) {
            return false;
        }
        frieSound(false);
        var totalSocker = this.totalSocker; //真实血条宽度
        var uiTotalWid = this.uiTotalWid; //ui中的血条宽度
        var everyBlood = this.everyBlood; //真实掉血量
        var uiBlood = uiTotalWid / totalSocker * everyBlood; //视觉掉血量
        if (this.uiTotalWid < 5) {
            this.uiTotalWid = 5;
        }
        this.uiTotalWid -= uiBlood;
        var stumcArr = this.stumcArr;
        var index = Math.round(Math.random() * (stumcArr.length - 1));
        stumcArr[index].plays();
        //对象池中取出 
        var bulletObj = stumcArr[index].pool.getObject('0xFF0000', stumcArr[index].globalPointStu, stumcArr[index].pointer, stumcArr[index].degree);
        //移动注册 添加碰撞回调
        bulletObj.move(this.globalPointNiu, function () {
            frieSound(true);
            //回收
            stumcArr[index].pool.returnObject(bulletObj);
            if (!_this.endFlag) {
                _this.changeStatues('cur');
            }
            var prosTw = egret.Tween.get(_this.pros);
            //计算视觉掉血量 totalSocker / (this.totalSocker - this.everyBlood) = ? / this.everyBlood
            prosTw.to({
                width: _this.uiTotalWid
            }, 200);
            var sockerObj = new Socker();
            sockerObj.sockernum = _this.everyBlood + Math.round(Math.random());
            sockerObj.positionX = Math.round(Math.random() * 20) + 5;
            _this.socker.addChild(sockerObj);
        });
        //避免重复添加
        if (!this.contains(bulletObj)) {
            this.addChild(bulletObj);
        }
    };
    //攻击过程中怪兽的状态改变
    SceneStart.prototype.changeStatues = function (name) {
        this.raremcFactory.status = name;
        this.blueRaremc.status = name;
        this.redRaremc.status = name;
    };
    SceneStart.prototype.rarePaly = function () {
        this.raremcFactory.plays(-1);
        this.blueRaremc.plays(-1);
        this.redRaremc.plays(-1);
    };
    return SceneStart;
}(Scene));
__reflect(SceneStart.prototype, "SceneStart");
