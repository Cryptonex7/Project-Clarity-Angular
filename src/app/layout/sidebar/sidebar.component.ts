import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  disabled = false;
  items: string[] = ['Item1', 'Item2', 'Item3'];
  vertical = '';
  constructor() { }

  ngOnInit(): void {
  }

}
