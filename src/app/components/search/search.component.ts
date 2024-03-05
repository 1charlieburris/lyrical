import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  title!: string;
  artist!: string;

  ngOnInit(): void {}

  async onSubmit() {
    console.log(
      'The user inputed the song: ' + this.title + ' by ' + this.artist
    );
  }
}
