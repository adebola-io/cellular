import { createWebRouter } from '@adbl/bullet';
import { homeRoutes } from './pages/home/routes';

export function define() {
  const routes = [
    {
      name: 'App',
      path: '/',
      redirect: '/home',
      children: [
        ...homeRoutes,
      ],
    },
  ];
  return createWebRouter({ routes });
}