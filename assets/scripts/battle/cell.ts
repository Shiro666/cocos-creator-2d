import { Vec2 } from "cc";
import { RoleBase } from "../base/role";

interface Options {
    position: Vec2;
}

export class Cell {
    /** 位置 */
    private position: Vec2;
    /** 角色 */
    private player: RoleBase | null;

    constructor(options: Options) {
        this.position = options.position;
    }
}