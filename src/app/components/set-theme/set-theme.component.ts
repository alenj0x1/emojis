import { Component, OnInit } from '@angular/core';
import { ManagePreferencesService } from '../../services/manage-preferences.service';

@Component({
  selector: 'app-set-theme',
  templateUrl: './set-theme.component.html',
  styleUrl: './set-theme.component.css'
})
export class SetThemeComponent implements OnInit {
  currentTheme: string = 'loading'

  constructor(private managePreferencesService: ManagePreferencesService) {}

  ngOnInit(): void {
    this.currentTheme = this.managePreferencesService.getTheme()
  }

  changeTheme() {
    this.managePreferencesService.setThemeInDocument()
    this.managePreferencesService.setTheme()
    this.currentTheme = this.managePreferencesService.getTheme()
  }
}
