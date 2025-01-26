import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import LandingPage from './pages/landingpage';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: LandingPage,
  }
];
