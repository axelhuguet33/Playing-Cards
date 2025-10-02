import { CommonModule } from '@angular/common';
import {Component, computed, effect, model, signal} from '@angular/core';
import {PlayingCard} from "./components/playing-card/playing-card";
import { SearchBar } from "./components/search-bar/search-bar";
import {Monster} from "./models/monster.model";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PlayingCard, SearchBar],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  monsters! : Monster[];
  search= model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()))
});

  constructor () {

    this.monsters = [];
    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption = "N°002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = 'assets/img/carapuce.jpg';
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°003 Car";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Bulb";
    monster3.image = 'assets/img/bulbisar.jpg';
    monster3.type = MonsterType.PLANT;
    monster3.hp = 60;
    monster3.figureCaption = "N°004 Bulb";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "Sal";
    monster4.image = 'assets/img/salameche.jpg';
    monster4.type = MonsterType.FIRE;
    monster4.hp = 60;
    monster4.figureCaption = "N°005 Sal";
    this.monsters.push(monster4);
  }
}