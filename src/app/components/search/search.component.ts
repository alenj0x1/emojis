import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetDataEmojiService } from '../../services/get-data-emoji.service';
import { Emoji } from '../../interfaces/Emoji.interfaces';
import { TransferDataEmojiService } from '../../services/transfer-data-emoji.service';
import { Categories, Groups } from '../../util/consts';
import { searchOnValues, searchTypeNames, searchTypeValues } from '../../util/enums';

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
    type: new FormControl<string>(searchTypeValues.random),
    on: new FormControl<string>(searchOnValues.none),
    option: new FormControl<string>('')
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
    const {
      type,
      on,
      option
    } = this.form.value
    const { dataEmojis } = this.getDataEmojiService
    const { trigger } = this.transferDataEmojiService

    await this.getDataEmojiService.fetchApi(type === '0' ? searchTypeNames.random : searchTypeNames.all, on, option)
    this.emojis = dataEmojis

    trigger.emit(this.emojis)
    this.eventoEmoji.emit(this.emojis)
  }

  getSelectOptions(): string[] {
    // Group
    if (this.form.value.on === '1') return Groups

    return Categories
  }
}
