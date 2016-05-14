/// <reference path="../typings/tsd.d.ts" />

import Car from './car';
import * as _ from 'lodash';

var c = new Car('toyota', 'rav4');

console.log(_.add(2,2));
console.log(`${c.make} ${c.model}`);
