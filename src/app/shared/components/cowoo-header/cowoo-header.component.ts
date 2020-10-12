import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cowoo-header',
  templateUrl: './cowoo-header.component.html',
  styleUrls: ['./cowoo-header.component.scss'],
})
export class CowooHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
