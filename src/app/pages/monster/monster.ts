import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.html',
  styleUrl: './monster.css'
})
export class Monster implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    
  }
}
