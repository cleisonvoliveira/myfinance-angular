import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

//Decorator @NgModule para sinalizar que essa classe AppModule representa um modulo do Angular
@NgModule({ //Metadados
  declarations: [ //Declara classes de visualizacao que pertence ao modulo
    AppComponent, //componente principal. AppComponent pertence ao modulo AppModule
    HelloComponent, 
    BemVindoComponent
  ],
  imports: [//importa outros modules que o AppModule depende
    BrowserModule
  ],
  providers: [], //Define provedores de servicos do module e torna acessivel para todas as partes da aplicacao
  bootstrap: [AppComponent] //componente principal que ira iniciar a aplicacao
})
export class AppModule { }
