import { createRootRoute, HeadContent, Outlet, Scripts, useMatches, useRouterState } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import SiteLayout from '@/layouts/SiteLayout';
import appCss from '@/styles/app.css?url';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { title: '$ ' },
            { property: 'og:site_name', content: 'Ricardo Colom - Software Engineer' },
            { property: 'og:title', content: 'Ricardo Colom - Software Engineer' },
            { property: 'og:description', content: 'Personal Site' },
            { property: 'og:url', content: 'https://ricardocolom.com' },
            { property: 'og:type', content: 'website' },
        ],
        links: [
            { rel: 'stylesheet', href: appCss },
            { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
            { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            { rel: 'preconnect', href: 'https://fonts.bunny.net' },
            { rel: 'stylesheet', href: 'https://fonts.bunny.net/css?family=instrument-sans:400,500,600' },
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    const pathname = useRouterState({ select: (s) => s.location.pathname });
    const hideHeader = useMatches({ select: (matches) => matches.some((m) => m.staticData.hideHeader) });

    return (
        <RootDocument>
            {/* Keyed on the path so SiteLayout remounts, and its fade-in replays, on every page. */}
            <SiteLayout key={pathname} hideHeader={hideHeader}>
                <Outlet />
            </SiteLayout>
        </RootDocument>
    );
}

function RootDocument({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body className="font-sans antialiased">
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function NotFound() {
    return (
        <p className="font-code text-sm">404 · page not found.</p>
    );
}
