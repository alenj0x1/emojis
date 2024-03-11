import { Component, Input, OnInit } from '@angular/core';
import { Emoji } from '../../interfaces/Emoji.interfaces';

@Component({
  selector: 'app-view-emoji',
  templateUrl: './view-emoji.component.html',
  styleUrl: './view-emoji.component.css'
})
export class ViewEmojiComponent implements OnInit {
  @Input()
  emoji: Emoji = {
    name: '',
    category: '',
    group: '',
    htmlCode: [],
    unicode: []
  }
  emojiCopyStyleChanges = {
    elements: '',
    check: ''
  }

  ngOnInit(): void {
    console.log('View emoji component initialized')
  }

  copyEmoji(event: MouseEvent) {
    navigator.clipboard.writeText(this.emoji.htmlCode[0])
      .then(() => {
        this.emojiCopyStyleChanges.elements = 'opacity-20 blur-sm duration-150'
        this.emojiCopyStyleChanges.check = 'opacity-100'
    
        setTimeout(() => {
          this.emojiCopyStyleChanges.elements = 'opacity-100'
          this.emojiCopyStyleChanges.check = 'opacity-0'
        }, 500);
      })
      .catch()
  }
}
