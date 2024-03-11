import { Component, OnInit } from '@angular/core';
import { GetDataEmojiService } from '../../services/get-data-emoji.service';
import { searchOnValues, searchTypeNames } from '../../util/enums';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent implements OnInit {
  presentationEmoji: string = ''

  constructor(private getDataEmojiService: GetDataEmojiService) { }

  ngOnInit(): void {
    this.getDataEmojiService.fetchApi(searchTypeNames.random, searchOnValues.category, 'animals-and-nature')
      .then(() => {
        this.presentationEmoji = this.getDataEmojiService.dataEmojis[0].htmlCode[0]
        this.getDataEmojiService.dataEmojis = []
      })
  }
}
