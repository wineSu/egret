var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ObjectPool = (function () {
    function ObjectPool(className) {
        this.className = className;
        this.list = [];
    }
    /**获取对象*/
    ObjectPool.prototype.getObject = function (color, point, a, r) {
        if (this.list.length > 0) {
            return this.list.pop();
        }
        console.log('对象用完了');
        var clazz = egret.getDefinitionByName(this.className);
        return new clazz(color, point, a, r);
    };
    /**回收对象*/
    ObjectPool.prototype.returnObject = function (value) {
        this.list.push(value);
    };
    /**
     * 获取对象池，如果不存在则新建一个
     * @param className 对象类名
     * @param initNum 初始化对象池数量
     */
    ObjectPool.getPool = function (className, testName, initNum, color, point, a, r) {
        if (initNum === void 0) { initNum = 1; }
        if (!ObjectPool.pool[testName]) {
            ObjectPool.pool[testName] = new ObjectPool(className);
            if (initNum != 0) {
                var clazz = egret.getDefinitionByName(className);
                var pool = ObjectPool.pool[testName];
                for (var i = 0; i < initNum; i++) {
                    pool.returnObject(new clazz(color, point, a, r));
                }
            }
        }
        return ObjectPool.pool[testName];
    };
    /**存储对象池的Object*/
    ObjectPool.pool = {};
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
