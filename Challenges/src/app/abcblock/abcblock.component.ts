import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abcblock',
  templateUrl: './abcblock.component.html',
  styleUrls: ['./abcblock.component.scss'],
})
export class ABCBlockComponent implements OnInit {
  blockTest = 'ABC';
  nom = 'yannick';

  imageSrc = '../../assets/Helicoptere.webp';

  constructor() {}

  ngOnInit(): void {}

  direBonjour() {
    console.log('Bonjour');
  }
}
