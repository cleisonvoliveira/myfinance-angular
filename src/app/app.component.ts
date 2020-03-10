import { Component } from '@angular/core';

//decorator
@Component({//Metadados
  selector: 'app-root', //seletor do componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Cleison';
}
