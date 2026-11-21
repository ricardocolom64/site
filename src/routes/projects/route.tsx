import { createFileRoute, notFound, Outlet, useMatches } from '@tanstack/react-router';

import ProjectLayout from '@/layouts/ProjectLayout';

export const Route = createFileRoute('/projects')({
    beforeLoad: ({ location }) => {
        if (location.pathname.replace(/\/$/, '') === '/projects') {
            throw notFound();
        }
    },
    component: ProjectsLayout,
});

function ProjectsLayout() {
    const project = useMatches({ select: (matches) => matches.at(-1)?.staticData.project });

    return project ? (
        <ProjectLayout name={project.name} year={project.year}>
            <Outlet />
        </ProjectLayout>
    ) : (
        <Outlet />
    );
}
