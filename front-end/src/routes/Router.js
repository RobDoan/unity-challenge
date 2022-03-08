import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/application-layout/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/application-layout/ApplicationLayout')));
/* ***End Layouts**** */

/* ****Pages***** */
const Categories = Loadable(lazy(() => import('../views/categories/Categories')));
const NewCategory = Loadable(lazy(() => import('../views/categories/NewCategory')));
const EditCategory = Loadable(lazy(() => import('../views/categories/EditCategory')));
const GameItems = Loadable(lazy(() => import('../views/game-items/GameItems')));

/* ****Routes***** */

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/categories" /> },
      { path: '/categories',
        element: <Categories />,
        children: [
          { index: true, element: <NewCategory /> },
          { path: "/categories/:id", element: <EditCategory /> },
        ]
      },
      {
        path: '/game-items',
        element: <GameItems />
      },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  }

];

export default Router;
