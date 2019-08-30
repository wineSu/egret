var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){c.label=r[1];break}if(6===r[0]&&c.label<a[1]){c.label=a[1],a=r;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(r);break}a[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(n){r=[6,n],o=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Scene=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.CREATION_COMPLETE,t.onComplete,t),t}return __extends(t,e),t}(eui.Component);__reflect(Scene.prototype,"Scene");var MovieClipGroup=function(e){function t(t,r){var n=e.call(this)||this,i=RES.getRes(t+"_json"),o=RES.getRes(t+"_png");return n.nameFactory=new egret.MovieClipDataFactory(i,o),n.mc1=new egret.MovieClip(n.nameFactory.generateMovieClipData(r)),n}return __extends(t,e),Object.defineProperty(t.prototype,"Mc",{get:function(){return this.mc1},enumerable:!0,configurable:!0}),t.prototype.plays=function(e){void 0===e&&(e=1),this.mc1.play(e)},t.prototype.position=function(e,t){this.mc1.x=e,this.mc1.y=t},Object.defineProperty(t.prototype,"status",{set:function(e){this.mc1.movieClipData=this.nameFactory.generateMovieClipData(e),this.mc1.play(1)},enumerable:!0,configurable:!0}),t}(eui.Group);__reflect(MovieClipGroup.prototype,"MovieClipGroup");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("default.res.json","https://jicvps.qingguo.com/pcWork/game/resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return r.sent(),this.stage.removeChild(e),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,r){var n=new eui.Theme("default.thm.json",e.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){SceneManager.Instance.rootLayer=this;var e=new SceneStart;SceneManager.Instance.changeScene(e)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,r,n){function i(e){t.call(n,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),r.call(n))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(n,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,r){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(n,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var c=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(n,generateJSON.paths[e])},this):RES.getResByUrl(c,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){t.call(n,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(n,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Bao=function(e){function t(){var t=e.call(this)||this;t.skinName="resource/skins/Bao.exml";var r=new MovieClipGroup("bao","wait");return t.bg.addChild(r.Mc),r.plays(1),t}return __extends(t,e),t}(eui.Component);__reflect(Bao.prototype,"Bao");var bullet=function(e){function t(t,r,n,i){var o=e.call(this)||this;o.a=n;var a=RES.getRes("zd_json"),s=RES.getRes("zd_png");return o.bulFactory=new egret.MovieClipDataFactory(a,s),o.bulletObj=new egret.MovieClip(o.bulFactory.generateMovieClipData("zd")),o.bulletObj.x=r.x-100,o.bulletObj.y=r.y,o.bulletObj.rotation=-i,o.addChild(o.bulletObj),o.bulletObj.addEventListener(egret.MovieClipEvent.FRAME_LABEL,function(e){o.initflag||(o.initflag=!0,o.init(),o.callback())},o),o}return __extends(t,e),t.prototype.move=function(e,t){this.bulletObj.gotoAndPlay("fall",-1),this.targetPoint=e,this.callback=t,this.initflag=!1,this.scaleX=1,this.bullet_move()},t.prototype.init=function(){this.x=0,this.y=0,this.scaleX=0,this.flag=!1,this.removeEventListener(egret.Event.ENTER_FRAME,this.frame,this)},t.prototype.frame=function(){var e=this.hitTestPoint(this.targetPoint.x+25,this.targetPoint.y+25);e&&!this.flag&&(this.flag=!0,this.bulletObj.gotoAndPlay("move",-1)),this.x-=30;var t=-this.x*this.a.clienty/this.a.clientx;this.y=t},t.prototype.bullet_move=function(){this.addEventListener(egret.Event.ENTER_FRAME,this.frame,this)},t}(eui.Group);__reflect(bullet.prototype,"bullet");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=1200,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,r){function n(n){t.call(r,n,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?n(i):RES.getResAsync(e,n,this)}else RES.getResByUrl(e,n,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var SceneManager=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return null==e._manager&&(e._manager=new e),e._manager},enumerable:!0,configurable:!0}),e.prototype.changeScene=function(e){this.currentScene&&(this.rootLayer.removeChild(this.currentScene),this.currentScene=null),this.rootLayer.addChild(e),this.currentScene=e},e}();__reflect(SceneManager.prototype,"SceneManager");var SceneStart=function(e){function t(){var t=e.call(this)||this;return t.uiTotalWid=122,t.skinName="resource/skins/SceneStartSkin.exml",t}return __extends(t,e),t.prototype.onComplete=function(){var e=this;this.time.play(),this.time.addEventListener("complete",this.onTweenGroupComplete,this),this.raremcFactory=new MovieClipGroup("testNiu","wait"),this.raremc=this.raremcFactory.Mc,this.niu.addChild(this.raremc),this.blueRaremc=new MovieClipGroup("blueRaremc","wait"),this.blueRaremc.position(320,30),this.redRaremc=new MovieClipGroup("redRare","wait"),this.redRaremc.position(40,340),window.isCrazy&&(this.niu.addChild(this.blueRaremc.Mc),this.niu.addChild(this.redRaremc.Mc)),callJsFunc(function(t){e.addStudents(t)});var t=getInitParam();this.everyBlood=t.every,this.totalSocker=t.total,this.raremc.addEventListener(egret.MovieClipEvent.FRAME_LABEL,function(t){"curend"==t.frameLabel&&(e.endFlag?e.changeStatues("die"):(e.changeStatues("wait"),e.rarePaly()))},this),this.stage.addEventListener("jsNotifyts",this.doTsPlay,this),this.stage.addEventListener("gameEndCallback",this.doTsPlay,this)},t.prototype.doTsPlay=function(){this.goPlay()},t.prototype.doGameEnd=function(){var e=this;this.endFlag=!0,setTimeout(function(){var t=new Bao;e.addChild(t)},1e3)},t.prototype.onTweenGroupComplete=function(){this.rarePaly(),this.djsTimer(),this.tip.scaleX=0},t.prototype.djsTimer=function(){function e(e){n--,r.text="00:"+(n>9?n:"0"+n)}function t(e){this.doGameEnd()}var r=this.djs.$children[1],n=30,i=new egret.Timer(1e3,30);i.addEventListener(egret.TimerEvent.TIMER,e,this),i.addEventListener(egret.TimerEvent.TIMER_COMPLETE,t,this),i.start()},t.prototype.addStudents=function(e){var t=this,r=JSON.parse(e).data;this.stuList=r.studentlist;var n=r.teacherinfo;this.teacherName.text=n.name||"老师";var i=n.avatar,o=new egret.ImageLoader;o.crossOrigin="anonymous",o.load(i),o.once(egret.Event.COMPLETE,function(e){if(e.currentTarget.data){var r=new egret.Texture;r.bitmapData=e.currentTarget.data;var n=new egret.Bitmap(r);n.width=140,n.height=140,t.teacherInfor.addChild(n),t.teacherInfor.setChildIndex(n,0)}},this);for(var a={x:this.raremc.x+this.raremc.width,y:this.raremc.y+this.raremc.height/2},s=this.raremc.localToGlobal(a.x,a.y),c=[],l=0,u=this.stuList.length;u>l;l++){var h=new StuList;this.stuScene.addChild(h),c.push(h);var p=c[l];p.y=100*Math.floor(l/3),p.x=100*((l+1)%3),p.labelName=this.stuList[l].nickname;var d={x:p.x+p.width/2,y:p.y+p.height/2},f=this.stuScene.localToGlobal(d.x,d.y);c[l].globalPointStu=f;var g={clientx:Math.abs(f.x-s.x),clienty:s.y-f.y};c[l].pointer=g;var y=180*Math.atan(g.clienty/g.clientx)/Math.PI;c[l].degree=y;var m=ObjectPool.getPool("bullet","name"+l,6,"0xFF0000",f,g,y);c[l].pool=m}this.stumcArr=c,this.globalPointNiu=s},t.prototype.goPlay=function(){var e=this;if(this.endFlag)return!1;var t=this.totalSocker,r=this.uiTotalWid,n=this.everyBlood,i=r/t*n;this.uiTotalWid<5&&(this.uiTotalWid=5),this.uiTotalWid-=i;var o=this.stumcArr,a=Math.round(Math.random()*(o.length-1));o[a].plays();var s=o[a].pool.getObject("0xFF0000",o[a].globalPointStu,o[a].pointer,o[a].degree);s.move(this.globalPointNiu,function(){o[a].pool.returnObject(s),e.endFlag||e.changeStatues("cur");var t=egret.Tween.get(e.pros);t.to({width:e.uiTotalWid},200);var r=new Socker;r.sockernum=e.everyBlood+Math.round(Math.random()),r.positionX=Math.round(20*Math.random())+5,e.socker.addChild(r)}),this.contains(s)||this.addChild(s)},t.prototype.changeStatues=function(e){this.raremcFactory.status=e,this.blueRaremc.status=e,this.redRaremc.status=e},t.prototype.rarePaly=function(){this.raremcFactory.plays(-1),this.blueRaremc.plays(-1),this.redRaremc.plays(-1)},t}(Scene);__reflect(SceneStart.prototype,"SceneStart");var Socker=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/Socker.exml",t.plays(),t}return __extends(t,e),t.prototype.plays=function(){this.scokerMove.play(1)},Object.defineProperty(t.prototype,"sockernum",{set:function(e){this.socker.text="-"+e.toString()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"positionX",{set:function(e){this.socker.x=e},enumerable:!0,configurable:!0}),t}(eui.Component);__reflect(Socker.prototype,"Socker");var StuList=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/StuList.exml",t}return __extends(t,e),t.prototype.plays=function(){this.stuPeo.play(1)},Object.defineProperty(t.prototype,"labelName",{set:function(e){this.stuname.text=e},enumerable:!0,configurable:!0}),t}(eui.Component);__reflect(StuList.prototype,"StuList");var ObjectPool=function(){function e(e){this.className=e,this.list=[]}return e.prototype.getObject=function(e,t,r,n){if(this.list.length>0)return this.list.pop();console.log("对象用完了");var i=egret.getDefinitionByName(this.className);return new i(e,t,r,n)},e.prototype.returnObject=function(e){this.list.push(e)},e.getPool=function(t,r,n,i,o,a,s){if(void 0===n&&(n=1),!e.pool[r]&&(e.pool[r]=new e(t),0!=n))for(var c=egret.getDefinitionByName(t),l=e.pool[r],u=0;n>u;u++)l.returnObject(new c(i,o,a,s));return e.pool[r]},e.pool={},e}();__reflect(ObjectPool.prototype,"ObjectPool");