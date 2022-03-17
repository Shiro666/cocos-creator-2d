
import { _decorator, Component, Node, Camera } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = mapControl
 * DateTime = Thu Mar 17 2022 20:25:13 GMT+0800 (中国标准时间)
 * Author = shiroin
 * FileBasename = mapControl.ts
 * FileBasenameNoExtension = mapControl
 * URL = db://assets/scripts/mapControl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('mapControl')
export class mapControl extends Component {
    // [1]
    // dummy = '';

    @property(Node)
    player: Node = null;

    @property(Camera)
    camera: Camera = null;

    start () {
        // [3]
    }

    update (deltaTime: number) {
        // if (this.player) {
        //     this.camera.node.position.set(this.player.position.x, this.player.position.y, 1000);
        //     console.log(this.camera.node.position)
        // }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
