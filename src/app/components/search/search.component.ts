import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetDataEmojiService } from '../../services/get-data-emoji.service';
import { Emoji } from '../../interfaces/Emoji.interfaces';
import { TransferDataEmojiService } from '../../services/transfer-data-emoji.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Input()
  eventoEmoji: EventEmitter<Emoji|Emoji[]> = new EventEmitter() 

  userInput: string = ''
  form = new FormGroup({
    search: new FormControl<string>(''),
    type: new FormControl<string>('0'), // '0' Random - '1' All
    on: new FormControl<string>('0') // '0' None - '1' Group - '2' Category
  })
  emojis: Emoji[] = [];

  constructor(
    private getDataEmojiService: GetDataEmojiService,
    private transferDataEmojiService: TransferDataEmojiService
  ) {
  }

  ngOnInit(): void {
    console.log('Search component initialized')
  }

  async searchEmoji(event: MouseEvent) {
    if (this.form.value.type === '1')  {
      await this.getDataEmojiService.getAllEmojis()
      this.emojis = this.getDataEmojiService.dataEmojis

      this.transferDataEmojiService.trigger.emit(this.emojis)
      this.eventoEmoji.emit(this.emojis)
      return;
    }

    await this.getDataEmojiService.getRandomEmoji()
    this.emojis = this.getDataEmojiService.dataEmojis

    this.transferDataEmojiService.trigger.emit(this.emojis)
    this.eventoEmoji.emit(this.emojis)
  }
}
