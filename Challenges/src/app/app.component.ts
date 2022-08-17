import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yannick';

  isThisIngredientVital: boolean = true;
  displayGuestList: boolean = true;
  songList: string[] = ['Superman', 'hello world', 'Faith'];
}
