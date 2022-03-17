
import { _decorator, Component, Node, EventHandler, Button } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Btn
 * DateTime = Wed Sep 29 2021 19:50:40 GMT+0800 (中国标准时间)
 * Author = shiroin
 * FileBasename = btn.ts
 * FileBasenameNoExtension = btn
 * URL = db://assets/scripts/btn.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Btn')
export class Btn extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    onLoad = () => {
        const clickEventHandler = new EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = 'Btn';
        clickEventHandler.handler = 'cb';
        clickEventHandler.customEventData = 'data';

        const button = this.node.getComponent(Button);
        button.clickEvents.push(clickEventHandler);
    }

    cb = (event: Event, data: string) => {
        console.log('click2')
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
