import { defineRoutes, lazy } from '@adbl/bullet';

export const homeRoutes = defineRoutes([
  {
    name: 'Home View',
    path: '/home',
    component: lazy(() => import('./index')),
  },
]);