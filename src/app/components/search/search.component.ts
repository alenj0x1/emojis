import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  userInput: string = ''
  form = new FormGroup({
    search: new FormControl<string>(''),
    type: new FormControl<string>('0'), // '0' Random - '1' All
    on: new FormControl<string>('0') // '0' None - '1' Group - '2' Category
  })

  ngOnInit(): void {
    console.log('Initialized')
  }

  searchEmoji(event: MouseEvent) {
    console.log({
      radioType: this.form.value.type,
      radioOn: this.form.value.on,
      userInput: this.userInput
    })
  }
}
