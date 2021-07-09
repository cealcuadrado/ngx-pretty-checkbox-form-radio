import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  numbers: any[] = [
    { id: 0, name: 'Cero', value: 'Cero' },
    { id: 1, name: 'Uno', value: 'Uno' },
    { id: 2, name: 'Dos', value: 'Dos' },
    { id: 3, name: 'Tres', value: 'Tres'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
