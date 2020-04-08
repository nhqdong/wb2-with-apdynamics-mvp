import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {applyPolyfills, defineCustomElements} from 'wb2/dist/loader';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
}).catch(err => console.error(err));


applyPolyfills().then(() => {
  defineCustomElements(window);
});