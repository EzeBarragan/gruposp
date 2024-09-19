import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Importar configuración
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,  // Extender los proveedores definidos en appConfig
    provideRouter(routes)
  ]
}).catch(err => console.error(err));

