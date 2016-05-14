/// <reference path="../../typings/tsd.d.ts" />
import * as angular from 'angular';
import carsComponent from './cars.component';


const carsModule = angular.module('app.cars', [ ]);

carsModule.component('appCars', carsComponent);

export { carsModule };
