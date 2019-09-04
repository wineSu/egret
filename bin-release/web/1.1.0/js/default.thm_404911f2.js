
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = undefined;generateEUI.paths['resource/skins/SceneStartSkin.exml'] = window.SceneStartSkin = (function (_super) {
	__extends(SceneStartSkin, _super);
	function SceneStartSkin() {
		_super.call(this);
		this.skinParts = ["time","gameBg","niu","stuScene","time2","time1","time4","time3","group","djsTime","djs","pro","pros","socker","tip","teacherName","teacherInfor","tit"];
		
		this.height = 810;
		this.width = 1440;
		this.time_i();
		this.elementsContent = [this.gameBg_i(),this.niu_i(),this.stuScene_i(),this.group_i(),this.djs_i(),this._Group1_i(),this.socker_i(),this.tip_i(),this.teacherInfor_i(),this.tit_i()];
		
		eui.Binding.$bindProperties(this, ["time3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, ["time2"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, ["time1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["time4"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["group"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"scaleX");
	}
	var _proto = SceneStartSkin.prototype;

	_proto.time_i = function () {
		var t = new egret.tween.TweenGroup();
		this.time = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "quadIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set1_i(),this._To2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "quintIn";
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set2_i(),this._To3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1500;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.ease = "quadIn";
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait3_i(),this._Set3_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait4_i(),this._To4_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2500;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "backIn";
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto.gameBg_i = function () {
		var t = new eui.Image();
		this.gameBg = t;
		t.fillMode = "scale";
		t.height = 810;
		t.source = "gameBg";
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.niu_i = function () {
		var t = new eui.Group();
		this.niu = t;
		t.height = 200;
		t.width = 200;
		t.x = 92;
		t.y = 346;
		return t;
	};
	_proto.stuScene_i = function () {
		var t = new eui.Group();
		this.stuScene = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 623;
		t.width = 351;
		t.x = 1089;
		t.y = 187;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.height = 240;
		t.width = 341;
		t.x = 577;
		t.y = 309.5;
		t.elementsContent = [this.time2_i(),this.time1_i(),this.time4_i(),this.time3_i()];
		return t;
	};
	_proto.time2_i = function () {
		var t = new eui.Image();
		this.time2 = t;
		t.alpha = 0;
		t.percentHeight = 100;
		t.source = "time2";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time1_i = function () {
		var t = new eui.Image();
		this.time1 = t;
		t.alpha = 0;
		t.percentHeight = 100;
		t.source = "time1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time4_i = function () {
		var t = new eui.Image();
		this.time4 = t;
		t.alpha = 0;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.source = "time4";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time3_i = function () {
		var t = new eui.Image();
		this.time3 = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.source = "time3";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.djs_i = function () {
		var t = new eui.Group();
		this.djs = t;
		t.height = 76;
		t.width = 165;
		t.x = 637.5;
		t.y = 38;
		t.elementsContent = [this.djsTime_i(),this._Label1_i()];
		return t;
	};
	_proto.djsTime_i = function () {
		var t = new eui.Image();
		this.djsTime = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.source = "time_png";
		t.width = 160;
		t.x = -2;
		t.y = -7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.text = "00:30";
		t.width = 80;
		t.x = 72;
		t.y = 17;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 47;
		t.width = 173;
		t.x = 192;
		t.y = 338.5;
		t.elementsContent = [this.pro_i(),this.pros_i()];
		return t;
	};
	_proto.pro_i = function () {
		var t = new eui.Image();
		this.pro = t;
		t.percentHeight = 100;
		t.source = "pro_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pros_i = function () {
		var t = new eui.Image();
		this.pros = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.blendMode = "normal";
		t.fillMode = "scale";
		t.height = 14;
		t.source = "pros_png";
		t.width = 127;
		t.x = 40;
		t.y = 16;
		return t;
	};
	_proto.socker_i = function () {
		var t = new eui.Group();
		this.socker = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.width = 58;
		t.x = 280;
		t.y = 344.5;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Image();
		this.tip = t;
		t.height = 354;
		t.source = "tip_png";
		t.width = 332;
		t.x = 946;
		t.y = 492;
		return t;
	};
	_proto.teacherInfor_i = function () {
		var t = new eui.Group();
		this.teacherInfor = t;
		t.height = 167;
		t.width = 152;
		t.x = 1278;
		t.y = 46;
		t.elementsContent = [this.teacherName_i()];
		return t;
	};
	_proto.teacherName_i = function () {
		var t = new eui.Label();
		this.teacherName = t;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x0a2f6c;
		t.text = "";
		t.textAlign = "center";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 110;
		return t;
	};
	_proto.tit_i = function () {
		var t = new eui.Image();
		this.tit = t;
		t.height = 148;
		t.source = "title_png";
		t.width = 600;
		t.x = 446;
		t.y = 104;
		return t;
	};
	return SceneStartSkin;
})(eui.Skin);generateEUI.paths['resource/skins/Socker.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = ["scokerMove","socker"];
		
		this.height = 23;
		this.width = 44;
		this.scokerMove_i();
		this.elementsContent = [this.socker_i()];
		
		eui.Binding.$bindProperties(this, ["socker"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [-50],[],this._Object1,"y");
	}
	var _proto = $exmlClass1.prototype;

	_proto.scokerMove_i = function () {
		var t = new egret.tween.TweenGroup();
		this.scokerMove = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "sineIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto.socker_i = function () {
		var t = new eui.Label();
		this.socker = t;
		t.italic = true;
		t.size = 30;
		t.stroke = 2;
		t.strokeColor = 0x351a1a;
		t.text = "-20";
		t.textColor = 0xefd915;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/skins/StuList.exml'] = window.$exmlClass2 = (function (_super) {
	__extends($exmlClass2, _super);
	function $exmlClass2() {
		_super.call(this);
		this.skinParts = ["stuPeo","stuname","peoMove","peo","group"];
		
		this.stuPeo_i();
		this.elementsContent = [this.group_i()];
		
		eui.Binding.$bindProperties(this, ["peo"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, ["peoMove"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
	}
	var _proto = $exmlClass2.prototype;

	_proto.stuPeo_i = function () {
		var t = new egret.tween.TweenGroup();
		this.stuPeo = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Wait1_i(),this._Set1_i(),this._Wait2_i(),this._Set2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 100;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait3_i(),this._Set3_i(),this._Wait4_i(),this._Set4_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 100;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 400;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 120;
		t.width = 100;
		t.y = 0;
		t.elementsContent = [this.stuname_i(),this.peoMove_i(),this.peo_i()];
		return t;
	};
	_proto.stuname_i = function () {
		var t = new eui.Label();
		this.stuname = t;
		t.maxHeight = 24;
		t.maxWidth = 120;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x1d1c25;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xfefd00;
		t.width = 80;
		t.wordWrap = false;
		t.x = 8;
		t.y = 11;
		return t;
	};
	_proto.peoMove_i = function () {
		var t = new eui.Image();
		this.peoMove = t;
		t.alpha = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.source = "peoMove_png";
		t.width = 68;
		t.x = 15;
		t.y = 37;
		return t;
	};
	_proto.peo_i = function () {
		var t = new eui.Image();
		this.peo = t;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.source = "peo_png";
		t.width = 68;
		t.x = 15;
		t.y = 37;
		return t;
	};
	return $exmlClass2;
})(eui.Skin);