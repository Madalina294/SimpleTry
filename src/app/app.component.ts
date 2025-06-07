import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ParentComponentComponent} from './parent-component/parent-component.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponentComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SimpleTry';
}
