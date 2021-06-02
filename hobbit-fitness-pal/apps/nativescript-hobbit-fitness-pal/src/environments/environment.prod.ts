import { environmentBase } from './environment.base';
import { IEnvironment } from '@hobbit-fitness-pal/xplat/core';
import { environmentProd } from '@hobbit-fitness-pal/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});