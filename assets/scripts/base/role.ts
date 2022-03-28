import { _decorator, Component, CCInteger, CCFloat } from "cc";
import { randomNum } from "../../utils";
const { property } = _decorator;

export class RoleBase extends Component {
    @property({
        type: CCInteger,
        displayName: '生命力',
        min: 0,
        max: 9999
    })
    HP = 100;

    @property({
        type: CCInteger,
        displayName: '防御力',
        min: 0,
        max: 9999
    })
    Defense = 100;

    @property({
        type: CCInteger,
        displayName: '攻击力',
        min: 0,
        max: 999
    })
    ATK = 100;

    @property({
        type: CCFloat,
        displayName: '暴击率',
        min: 0.0,
        max: 1.0
    })
    Critical = 0.0;

    @property({
        type: CCFloat,
        displayName: '爆伤',
        min: 1.5,
        max: 3.0
    })
    CriticalDamage = 1.5;

    @property({
        type: CCInteger,
        displayName: '速度'
    })
    Speed = 1;

    /**
     * HP改变
     * @param value 改变值
     */
    changeHP = (value: number) => {
        const HP = this.HP + value;
        this.HP = this.isDead(HP) ? 0 : HP;
    }

    /**
     * 攻击某人
     * @param node 其他人
     */
    hitOther = (node: RoleBase) => {
        // 是否暴击
        const isCritical = randomNum(0, 1, 2) <= this.Critical;
        const baseDamage = this.ATK - node.Defense > 0 ? this.ATK - node.Defense : 0;
        const finalDamage = isCritical ? Math.round(baseDamage * this.CriticalDamage) : baseDamage;
        node.changeHP(finalDamage);
    }

    /**
     * 是否死亡
     * @param HP 当前生命力
     * @returns boolean
     */
    isDead = (HP: number) => {
        // 更新相关状态
        return HP > 0;
    }
}