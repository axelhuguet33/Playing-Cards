import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.model';
import { CommonModule } from '@angular/common';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-monster-list',
  standalone : true,
  imports: [CommonModule, PlayingCard, SearchBar],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterList {
  monsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search= model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()))
});

  constructor () {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster ();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
}
