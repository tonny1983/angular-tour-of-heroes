/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://bpez.eorionsolution.com/engine-rest';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
