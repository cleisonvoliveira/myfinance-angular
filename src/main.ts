import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Comando vai carregar a aplicacao e iniciar o modulo principal que é o AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
