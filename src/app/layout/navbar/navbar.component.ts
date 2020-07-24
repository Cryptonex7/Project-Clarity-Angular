import { Component, OnInit } from '@angular/core';
import { runCssVarsPolyfill } from '@clr/core';

const darkThemeStyleSheet = document.styleSheets[3];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkThemeIsActive = false;
  disabled = false;
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
  constructor(){}
  
  ngOnInit() {
    darkThemeStyleSheet.disabled = true;
  }

  toggleDarkTheme() {
    toggleStylesheet(darkThemeStyleSheet, this.darkThemeIsActive = !this.darkThemeIsActive);
    runCssVarsPolyfill();
  }
}

function toggleStylesheet(stylesheet: any, enable: boolean) {
  stylesheet.disabled = !enable;
}