import { observable, computed, action } from 'mobx'
import oneInfo from './OneInfo'
import twoInfo from './TwoInfo'

/** 
 * 根store
 * OneInfo OneInfo数据
 * TwoInfo TwoInfo数据
*/
class RootStore {

    constructor() {
        this.OneInfo = new OneInfo(oneInfo,this)
        this.TwoInfo = new TwoInfo(twoInfo,this)
    }
}
// One
class OneInfo {
    @observable
    allDatas = []
    constructor(data,rootStore) {
        this.allDatas = data
        this.rootStore = rootStore
    }
    //加
    @action
    add(num) {
        this.allDatas.oneNum = num + 1
        this.rootStore.TwoInfo.allDatas.twoColor = 'red'
    }
    //减
    @action
    sub(num) {
        this.allDatas.oneNum = num - 1
        this.rootStore.TwoInfo.allDatas.twoColor = 'blue'
    }
}

// Two
class TwoInfo {
    @observable
     allDatas = {}
    constructor(data,rootStore) {
        this.allDatas = data
        this.rootStore = rootStore
    }
}


export default new RootStore()