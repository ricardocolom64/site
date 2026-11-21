import { createFileRoute } from '@tanstack/react-router';

import { pageTitle } from '@/lib/site';

const project = { name: 'HHA Pay', year: '' };

export const Route = createFileRoute('/projects/hha-pay')({
    staticData: { project },
    head: () => ({ meta: [{ title: pageTitle(project.name) }] }),
    component: HHAPay,
});

function HHAPay() {
    return (
        <div className="flex flex-col min-h-125 justify-center text-left m-6 sm:m-12 space-y-8">
            <p>Under construction, please try again later.</p>
        </div>
    );
}
