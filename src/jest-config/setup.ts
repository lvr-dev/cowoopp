import 'jest-preset-angular';
import './globalMocks';

declare var global;
Object.defineProperty(global, 'Promise', { writable: false, value: window.Promise });
