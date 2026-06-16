import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]), // Single-page app structure uses standard hash/anchor anchors, clean routing configuration is fine empty
  ],
};
