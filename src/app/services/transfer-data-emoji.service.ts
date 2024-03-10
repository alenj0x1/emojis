import { EventEmitter, Injectable, Output } from '@angular/core';
import { Emoji } from '../interfaces/Emoji.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TransferDataEmojiService {
  @Output()
  trigger: EventEmitter<Emoji[]> = new EventEmitter()
  
  constructor() { }
}
