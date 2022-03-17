
import { _decorator, Component, systemEvent, SystemEvent, Event, EventKeyboard, CCInteger, Vec2, Vec3, tween, Node, Animation, AnimationComponent } from 'cc';
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
export class Controler extends Component {

    private Input: {} = {};
    private aniComp: AnimationComponent;
    private aniState = '';

    @property(Node)
    player: Node = null;

    @property({
        type: CCInteger,
        displayName: '生命值',
        min: 0,
        max: 100
    })
    HP = 100;

    @property({
        displayName: '速度'
    })
    speed: Vec2 = new Vec2(1, 1);

    start () {}

    update (deltaTime: number) {
        this.handleMove();
    }

    onLoad = () => {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.handleKeyDown);
        systemEvent.on(SystemEvent.EventType.KEY_UP, this.handleKeyUp);

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
        this.Input['37'] && (x -= this.speed.x);
        this.Input['39'] && (x += this.speed.x);
        let y = 0;
        this.Input['40'] && (y -= this.speed.y);
        this.Input['38'] && (y += this.speed.y);

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
