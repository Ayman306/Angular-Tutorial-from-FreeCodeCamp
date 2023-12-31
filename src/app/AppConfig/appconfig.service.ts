import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environmet } from '../../environment/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndPoint: environmet.apiUrl,
};
