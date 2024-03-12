import { Component, OnInit } from '@angular/core';
import { Emoji } from '../../interfaces/Emoji.interfaces';
import { TransferDataEmojiService } from '../../services/transfer-data-emoji.service';

@Component({
  selector: 'app-container-emojis',
  templateUrl: './container-emojis.component.html',
  styleUrl: './container-emojis.component.css'
})
export class ContainerEmojisComponent implements OnInit {
  emojisContainer: Emoji[] = []
  directionCurrent: boolean = false

  constructor(private transferDataEmojiService: TransferDataEmojiService) { }

  ngOnInit(): void {
    console.log('Container emojis component initialized')

    this.transferDataEmojiService.trigger.subscribe(data => {
      this.emojisContainer = data
    })
  }

    changeDirection(direction: boolean) {
      console.log(this.directionCurrent)
      this.directionCurrent = direction
    }
}
