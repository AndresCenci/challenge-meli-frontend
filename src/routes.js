import { HomePage } from './pages/HomePage';
import { ItemListPage } from './pages/ItemListPage';
import { ItemPage } from './pages/ItemPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const routes = [
  {
    key: 1,
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: 2,
    path: '/items',
    component: ItemListPage,
    exact: true,
  },
  {
    key: 3,
    path: '/items/:id',
    component: ItemPage,
    exact: true,
  },
  {
    key: 4,
    component: NotFoundPage,
  },
];
