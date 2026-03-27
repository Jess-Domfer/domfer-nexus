import { Component } from '@angular/core';
import { ButtonComponent } from '@domfer/design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'domfer-app';
}
