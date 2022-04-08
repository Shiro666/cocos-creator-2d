
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

    /** 初始化角色 */
    initRole = () => {
        console.log('initRole');
    }

    /** 开始行动 */
    action = async () => {
        await this.showActionMenu();
    }

    /** 展示行动命令选择菜单 */
    showActionMenu = () => {
        return new Promise((resolve) => {
            resolve(1);
        })
    }
}
