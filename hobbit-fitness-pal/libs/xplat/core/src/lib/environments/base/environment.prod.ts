import { IEnvironment } from '@hobbit-fitness-pal/xplat/core';
import { deepMerge } from '@hobbit-fitness-pal/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
