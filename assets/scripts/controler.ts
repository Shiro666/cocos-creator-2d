
import { _decorator, EventKeyboard, Node, Animation, AnimationComponent, Input, input } from 'cc';
import { RoleBase } from './base/role';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Controler
 * DateTime = Wed Sep 29 2021 15:19:37 GMT+0800 (中国标准时间)
 * Author = shiroin
 * FileBasename = controler.ts
 * FileBasenameNoExtension = controler
 * URL = db://assets/scripts/controler.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Controler')
export class Controler extends RoleBase {

    private Input: {} = {};
    private aniComp: AnimationComponent;
    private aniState = '';

    @property(Node)
    player: Node = null;

    start () {}

    update (deltaTime: number) {
        this.handleMove();
    }

    onLoad = () => {
        input.on(Input.EventType.KEY_DOWN, this.handleKeyDown);
        input.on(Input.EventType.KEY_UP, this.handleKeyUp);

        this.aniComp = this.node.getComponent(Animation);
    }

    handleKeyDown = (event: EventKeyboard) => {
        this.Input[event.keyCode] = true;
    }

    handleKeyUp = (event: EventKeyboard) => {
        this.Input[event.keyCode] = false;
    }

    handleMove = () => {
        let x = 0;
        this.Input['37'] && (x -= this.Speed);
        this.Input['39'] && (x += this.Speed);
        let y = 0;
        this.Input['40'] && (y -= this.Speed);
        this.Input['38'] && (y += this.Speed);

        let aniState = '';
        if (x) {
            this.setAniState(x > 0 ? 'walk_right' : 'walk_left');
        } else if (y) {
            this.setAniState(y > 0 ? 'walk_up' : 'walk_down');
        } else {
            this.setAniState('');
            this.aniComp.pause();
        }

        const posX = this.node.position.x + x;
        const posY = this.node.position.y + y;
        this.node.setPosition(posX, posY, 0);
    }

    setAniState = (aniState: string) => {
        if (aniState === this.aniState) return;
        this.aniState = aniState;
        aniState && this.aniComp.play(aniState);
    }
}
