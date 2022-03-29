
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('map')
export class cellMap extends Component {
    // [1]
    // dummy = '';
    public cellList: Node[] = [];

    // [2]
    // @property
    // serializableDummy = 0;

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
