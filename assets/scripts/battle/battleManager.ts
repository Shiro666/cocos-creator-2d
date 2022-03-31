
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

    onLoad () {
        // 变更该节点为常驻节点
        game.addPersistRootNode(this.node);
    }

    start () {
        // [3]
        this.startBattle();
    }

    startBattle () {
        // 初始化人物
        const roleInstance = instantiate(this.rolePrefab);
        const role = roleInstance.getComponent(battalRole);
        role.initRole();
        this.mapOwn.cellList[1].addChild(roleInstance);
    }
}
