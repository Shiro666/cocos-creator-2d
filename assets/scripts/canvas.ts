
import { _decorator, Component, Node, EventHandler, Button, Event } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Canvas
 * DateTime = Wed Sep 29 2021 19:42:07 GMT+0800 (中国标准时间)
 * Author = shiroin
 * FileBasename = canvas.ts
 * FileBasenameNoExtension = canvas
 * URL = db://assets/scripts/canvas.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Canvas')
export class Canvas extends Component {
    // [1]
    // dummy = '';

    @property(Node)
    player: Node = null;

    start () {
        console.log('player', this.player);
    }

    // update (deltaTime: number) {
        
    // }
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
