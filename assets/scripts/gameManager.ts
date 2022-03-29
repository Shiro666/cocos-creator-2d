
import { _decorator, Component, Node, game } from 'cc';
const { ccclass, property } = _decorator;

/**
 * @description 管理游戏进程
 */
 
@ccclass('gameManager')
export class gameManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    onLoad () {
        // 变更该节点为常驻节点
        game.addPersistRootNode(this.node);
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
