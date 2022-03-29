import React from 'react';
import { renderRoutes } from 'react-router-config';

export const BlogLayout = props => {
  return (
    <div>{renderRoutes(props.route.routes)}</div>
  )
}