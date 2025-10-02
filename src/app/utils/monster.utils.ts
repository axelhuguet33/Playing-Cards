export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water"
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/plant.png',
        color: '#4E8234'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'assets/img/electrik.png',
        color: '#F3D23B'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/fire.jpg',
        color: '#E73B0C'
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/img/water.png',
        color: '#3299F3'
    }
};
