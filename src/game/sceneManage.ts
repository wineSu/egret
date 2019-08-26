/**
 * 单例模式管理场景
 */ 
class SceneManager {

	private static _manager:SceneManager;
	public static get Instance(){
		if( SceneManager._manager==null){
			SceneManager._manager = new SceneManager();
		}
		return SceneManager._manager;
	}
	
	public constructor() {
		 
	}
	
	public rootLayer:eui.UILayer;//起始场景
	private currentScene:Scene;//需要显示的场景

	//切换场景
	public changeScene(s:Scene){
		if(this.currentScene){
			this.rootLayer.removeChild(this.currentScene);
			this.currentScene = null;
		}
		this.rootLayer.addChild(s);
		this.currentScene = s;
	}

}