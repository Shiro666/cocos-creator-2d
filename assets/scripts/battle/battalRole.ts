
import { _decorator, Node } from 'cc';
import { RoleBase } from '../base/role';
const { ccclass, property } = _decorator;

@ccclass('battalRole')
export class battalRole extends RoleBase {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    onLoad () {
        console.log('load role');
    }

    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    public initRole = () => {
        console.log('initRole');
    }
}
