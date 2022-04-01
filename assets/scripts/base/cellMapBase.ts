
import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('cellMapBase')
export class cellMapBase extends Component {
    /** 格子列表，从0-11共12个格子 */
    public cellList: Node[] = [];

    onLoad = () => {
        
    }
}
