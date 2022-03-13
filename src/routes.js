import { AuthLayout } from './layouts/auth';
import { MainLayout } from './layouts/main';

import { MarkList } from './components/MarksList';
import { NameForm } from './components/NameForm/NameForm';
import { SupportForm } from './components/SupportForm/SupportForm';
import { Login } from './components/Login';

export const routes = [
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth",
        component: Login
      }
    ]
  },
  {
    path: "*",
    component: MainLayout,
    routes: [
      {
        path: "/support",
        component: SupportForm
      },
      {
        path: "/name",
        component: NameForm
      },
      {
        path: "/",
        component: MarkList
      }
    ]
  }
];