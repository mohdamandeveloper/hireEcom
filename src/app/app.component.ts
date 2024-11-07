import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ansrpoTest';
  isOpen: boolean = false;
  openNav(){
    document.getElementById('mySidenav').style.width = '250px';
  }
  closeNav(){
    document.getElementById('mySidenav').style.width = '0';
  }
}
