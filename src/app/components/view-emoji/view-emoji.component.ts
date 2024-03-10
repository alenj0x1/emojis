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

  ngOnInit(): void {
    console.log('View emoji component initialized')
  }
}
