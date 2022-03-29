import { AuthLayout } from './layouts/auth';
import { BlogLayout } from './layouts/blog';
import { NewsLayout } from './layouts/news';
import { MainLayout } from './layouts/main';

import { MarkList } from '../components/MarksList';
import { NameForm } from '../components/NameForm/NameForm';
import { SupportForm } from '../components/SupportForm/SupportForm';
import { Login } from '../components/Login';
import { Blog } from '../components/Blog';

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
    path: "/blog",
    component: BlogLayout,
    routes: [
    {
        path: "/blog",
        component: Blog
    }
    ]
  },
  {
    path: "/news",
    component: NewsLayout,
    routes: [
      {
        path: "/news/support",
        component: SupportForm
      },
      {
        path: "/news/name",
        component: NameForm
      },
      {
        path: "/news",
        component: SupportForm
      }
    ]
  },
  {
    path: "/",
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