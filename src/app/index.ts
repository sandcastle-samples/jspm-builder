/// <reference path="../typings/tsd.d.ts" />
import * as angular from 'angular';
import { carsModule } from './cars/cars.module';

export default angular.module('cars', [
  carsModule.name
]);

angular.bootstrap(document.documentElement, [
  'cars'
]);
