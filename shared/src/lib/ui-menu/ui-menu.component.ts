import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-ui-menu',    // <- the HTML tag to use
  templateUrl: './ui-menu.component.html',
  styleUrls: ['./ui-menu.component.css'],
  standalone: true,    
  imports: [RouterModule], 
})
export class UiMenuComponent {}