import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiMenuComponent } from '@mfe-angular-nx-app/shared';

@Component({
  selector: 'shell-root',
  standalone: true,
  imports: [RouterModule, UiMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'shell';
}
