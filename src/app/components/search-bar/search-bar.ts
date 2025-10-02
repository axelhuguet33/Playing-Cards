import { Component, Output, EventEmitter, Input, output, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  search = model<string>("Initial");
  searchButtomClicked = output({alias :"submit"});
  searchClick() {
    this.searchButtomClicked.emit();
  }
 }
