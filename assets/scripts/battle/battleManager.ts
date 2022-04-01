
import { _decorator, Component, Node, game, Prefab, instantiate } from 'cc';
import { battalRole } from './battalRole';
import { cellMapEnemy } from './cellMapEnemy';
import { cellMapOwn } from './cellMapOwn';
const { ccclass, property } = _decorator;

@ccclass('battleManager')
export class battleManager extends Component {

    @property({
        type: cellMapOwn,
        displayName: '己方网格'
    })
    mapOwn: cellMapOwn = null;

    @property({
        type: cellMapEnemy,
        displayName: '敌方网格'
    })
    mapEnemy: cellMapEnemy = null;

    @property({
        type: Prefab,
        displayName: '角色prefab'
    })
    rolePrefab: Prefab = null;

    private allRoles: Node[] = [];

    onLoad () {
        // 变更该节点为常驻节点
        game.addPersistRootNode(this.node);
    }

    start () {
        // [3]
        this.initRoles();
        this.initEnemy();
        this.calcSpeed();
        this.startAction();
    }

    /** 初始化人物 */
    initRoles = () => {
        const roleInstance = instantiate(this.rolePrefab);
        const role = roleInstance.getComponent(battalRole);
        role.initRole();
        this.mapOwn.cellList[1].addChild(roleInstance);
        this.allRoles.push(roleInstance);
    }

    /** 初始化敌人 */
    initEnemy = () => {
        const roleInstance = instantiate(this.rolePrefab);
        roleInstance.setScale(-1, 1, 1);
        const role = roleInstance.getComponent(battalRole);
        role.initRole();
        this.mapEnemy.cellList[1].addChild(roleInstance);
        this.allRoles.push(roleInstance);
    }

    /** 按速度排序（出手顺序） */
    calcSpeed = () => {
        this.allRoles = this.allRoles.sort((node1, node2) => {
            const role1 = node1.getComponent(battalRole);
            const role2 = node2.getComponent(battalRole);
            return role1.Speed - role2.Speed;
        });
    }

    /** 开始行动 */
    startAction = async () => {
        for (let i = 0; i < this.allRoles.length; i++) {
            const role = this.allRoles[i].getComponent(battalRole);
            await role.action();
        }
    }
}
