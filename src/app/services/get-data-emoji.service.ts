import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emoji } from '../interfaces/Emoji.interfaces';
import { baseURL } from '../util/consts';
import { searchOnNames } from '../util/enums';

@Injectable({
  providedIn: 'root'
})
export class GetDataEmojiService {
  dataEmojis: Emoji[] = []

  constructor(private http: HttpClient) {}

  async fetchApi(type: string, on: string|null|undefined = '', option: string|null|undefined) {
    const onParsed = this.onParser(on)
    const requestURL = `${baseURL}/${type}/${onParsed && option ? onParsed + '/' + option : '' }`

    return new Promise<boolean>((resolve, reject) => {
      this.http.get(requestURL, { responseType: 'json' }).subscribe({
        next: (res) => {
          if (Array.isArray(res)) {
            res.forEach((emoji) => {
              this.dataEmojis.push(emoji)
            })
          } else {
            this.dataEmojis.push(res as Emoji)
          }

          resolve(true)
        },
        error: () => {
          reject(false)
        }
      })
    })
  }

  onParser(on: string|null) {
    return on === '1' ? searchOnNames.group
      : on === '2' ? searchOnNames.category
      : ''
  }
}
