import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagePreferencesService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  localStorage = this.document.defaultView?.localStorage

  // Theme
  setTheme(): string {
    const getTheme = this.localStorage?.getItem('theme')
    const newTheme = this.getThemeOptions(getTheme)

    this.localStorage?.setItem('theme', newTheme)
    
    return newTheme
  }

  setThemeInDocument(): void {
    const currentTheme = this.getTheme()
    const documentElement = this.document.documentElement

    if (documentElement.classList.contains(currentTheme)) {
      documentElement.classList.remove(currentTheme)
      documentElement.classList.add(this.getThemeOptions(currentTheme))
      return;
    }

    documentElement.classList.add(currentTheme)
  }

  getTheme(): string {
    const getTheme = this.localStorage?.getItem('theme')
    
    if (!getTheme) {
      this.localStorage?.setItem('theme', 'dark')
      return 'dark'
    }

    return getTheme
  }

  getThemeOptions(theme?: string|null): string {
    return theme === 'dark' ? 'light' : 'dark'
  }
}
