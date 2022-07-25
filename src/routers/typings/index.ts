import type { RouteObject } from 'react-router-dom';

export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  key?: string;
}

export interface RouteInfo extends RouteObject {
  meta?: MetaProps;
  isLink?: string;
}
