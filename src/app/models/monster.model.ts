import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name: string = "Pikachu";
    image: string = "assets/img/Pikachu.jpg"
    type: MonsterType = MonsterType.ELECTRIC
    hp: number = 40;
    figureCaption: string = "N°001 Monster";
    attackName: string = "Geo Impact";
    attackStrength: number = 60;
    attackDescription: string = "This is a long decription";
}