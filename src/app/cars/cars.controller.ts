/// <reference path="../../typings/tsd.d.ts" />
import Car from './car';

export default class CarsController {

  public cars: any = [];

  $onInit() {
    this.cars.push(new Car('Toyota', 'Rav4'));
  };

  create(make: string, model: string): Car {
    let car = new Car(make, model);
    this.cars.push(car);
    return car;
  }
}
