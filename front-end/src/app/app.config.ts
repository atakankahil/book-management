import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import * as sql from 'mssql';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

const config: sql.config = {
  server: 'your_server_name',
  database: 'your_database_name',
  user: 'your_username',
  password: 'your_password',
  options: {
    encrypt: true, // Enable encryption if needed
  },
};
