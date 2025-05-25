import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TecnologiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculumPe';
}
