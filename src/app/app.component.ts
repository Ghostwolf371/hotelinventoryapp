import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-root',
  standalone: true,
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from Deez Nutz</h1>
  //   <p>Angular can catch deez hands</p> `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RoomsComponent, CommonModule],
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
