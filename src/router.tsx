import { createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

export interface ProjectInfo {
    name: string;
    year: string;
}

declare module '@tanstack/react-router' {
    interface StaticDataRouteOption {
        hideHeader?: boolean;
        project?: ProjectInfo;
    }
}

export function getRouter() {
    return createRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: 'intent',
    });
}
