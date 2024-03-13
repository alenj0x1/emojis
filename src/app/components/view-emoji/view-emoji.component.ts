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
    id: 0,
    name: '',
    category: '',
    group: '',
    htmlCode: [],
    unicode: []
  }
  copyStyle = {
    elements: '',
    check: '',
    text: ''
  }

  ngOnInit(): void {
    console.log('View emoji component initialized')
  }

  copyHTML() {
    this.writeClipboard('HTML copied')
  }

  copyEmoji(elementId: number) {
    this.writeClipboard('Emoji copied', String(elementId))
  }

  private writeClipboard(text: string, elementId?: string) {
    let emojiElement: HTMLElement|null = null
    if (elementId) emojiElement = document.getElementById(`emoji-${elementId}`)

    navigator.clipboard.writeText(emojiElement ? emojiElement.textContent as string : this.emoji.htmlCode[0])
      .then(() => {
        this.copyStyle.elements = 'opacity-20 blur-sm duration-150'
        this.copyStyle.check = 'opacity-100'
        this.copyStyle.text = text
      
        setTimeout(() => {
          this.copyStyle.elements = 'opacity-100'
          this.copyStyle.check = 'opacity-0'
        }, 500);
      })
    .catch()
  }
}
