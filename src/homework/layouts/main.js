import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Menu } from '../../components/Menu';

export const MainLayout = props => {
  return (
    <div>
      <h1>Menu</h1>
      <aside>
        <nav><Menu/></nav>
      </aside>
      <main>{renderRoutes(props.route.routes)}</main>
    </div>
  )
}