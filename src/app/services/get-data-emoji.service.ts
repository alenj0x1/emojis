import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emoji } from '../interfaces/Emoji.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetDataEmojiService {
  baseURL = 'https://emojihub.yurace.pro/api'
  dataEmoji: Emoji = {
    name: '',
    category: '',
    group: '',
    htmlCode: [],
    unicode: []
  };
  dataEmojis: Emoji[] = []

  constructor(private http: HttpClient) {}

  async getRandomEmoji(): Promise<Emoji> {
    /**
     *  this.http.request('GET', this.BASE_URL + 'random', { responseType: 'json'}).subscribe(value => {
     *    this.data = value
     *  })
     */
    await this.fetchApi()

    return this.dataEmoji
  }

  async fetchApi(type: string = 'random', on: string = '', arg?: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get(`${this.baseURL}/${type}/${on}`, { responseType: 'json' }).subscribe({
        next: (res) => {
          this.dataEmoji = res as Emoji
          resolve(true)
        },
        error: () => {
          reject(false)
        }
      })
    })
  }
}
