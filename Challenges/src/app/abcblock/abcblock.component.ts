import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abcblock',
  templateUrl: './abcblock.component.html',
  styleUrls: ['./abcblock.component.scss'],
})
export class ABCBlockComponent implements OnInit {
  blockTest = 'ABC';

  constructor() {}

  ngOnInit(): void {}
}
