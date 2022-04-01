
import { _decorator, Component, Node } from 'cc';
import { cellMapBase } from '../base/cellMapBase';
const { ccclass } = _decorator;


@ccclass('map')
export class cellMapOwn extends cellMapBase {

    onLoad = () => {
        this.cellList = this.node.children;
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
