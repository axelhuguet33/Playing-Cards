import { Component, Input, InputSignal, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {Monster} from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {
@Input() monster = new Monster();
monsterTypeIcon : string = 'assets/img/electrik.png';
backgroundcolor : string ="rgb(255, 255, 104)";

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['monster']) {
        if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
          this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
          this.backgroundcolor = MonsterTypeProperties[this.monster.type].color;
        }
    }
  }
}
