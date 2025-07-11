import { RouteObject } from 'react-router';
import { lazy } from 'react';

const PublicModule = lazy(() => import('../modules/public'));
const PortfolioPage = lazy(() => import('../modules/public/pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicModule />,
    children: [
      {
        index: true,
        element: <PortfolioPage />,
      },
    ],
  },
];