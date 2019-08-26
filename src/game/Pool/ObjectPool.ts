class ObjectPool {
    /**存储对象池的Object*/
    private static pool: Object = {};
    /**存储对象的数组*/
    private list: Array<any>;
    /**对象类型*/
    private className: string;

    public constructor(className: string) {
        this.className = className;
        this.list = [];
    }

    /**获取对象*/
    public getObject(color,point,a,r): any {
        if(this.list.length > 0) {
            return this.list.pop();
        }
        console.log('对象用完了')
        var clazz: any = egret.getDefinitionByName(this.className);
        return new clazz(color,point,a,r);

    }

    /**回收对象*/
    public returnObject(value: any): void {
        this.list.push(value);
    }
    /**          
     * 获取对象池，如果不存在则新建一个          
     * @param className 对象类名         
     * @param initNum 初始化对象池数量          
     */
    public static getPool(className: string,testName: string,initNum: number = 1,color,point,a,r): ObjectPool {
        if(!ObjectPool.pool[testName]) {
            ObjectPool.pool[testName] = new ObjectPool(className);
            if(initNum != 0) {
                var clazz: any = egret.getDefinitionByName(className);
                var pool: ObjectPool = ObjectPool.pool[testName];
                for(var i: number = 0;i < initNum;i++) {
                    pool.returnObject(new clazz(color,point,a,r));
                }
            }
        }
        return ObjectPool.pool[testName];
    }
}