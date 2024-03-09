import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetDataEmojiService } from '../../services/get-data-emoji.service';
import { Emoji } from '../../interfaces/Emoji.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  userInput: string = ''
  form = new FormGroup({
    search: new FormControl<string>(''),
    type: new FormControl<string>('0'), // '0' Random - '1' All
    on: new FormControl<string>('0') // '0' None - '1' Group - '2' Category
  })
  emoji: Emoji;

  constructor(private getDataEmojiService: GetDataEmojiService) {
    this.getDataEmojiService.getRandomEmoji()
    this.emoji = this.getDataEmojiService.dataEmoji
  }

  ngOnInit(): void {
    console.log('Initialized')
  }

  searchEmoji(event: MouseEvent) {
    this.getDataEmojiService.getRandomEmoji()
    this.emoji = this.getDataEmojiService.dataEmoji

    const { name, category, group, htmlCode, unicode } = this.emoji

    console.log({
      name,
      category,
      group,
      htmlCode,
      unicode
    })
  }
}
