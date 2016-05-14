/// <reference path="../../typings/tsd.d.ts" />
import CarsController from './cars.controller';
import template from './cars.template.html';

const carsComponent: ng.IComponentOptions = {
  bindings: {
    cars: '=?'
  },
  controller: CarsController,
  template: template
};

export default carsComponent;
