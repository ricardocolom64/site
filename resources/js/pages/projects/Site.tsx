import ProjectLayout from '@/layouts/ProjectLayout';
import logo from '@/assets/projects/site/logo.svg';
import melee_boxart from '@/assets/projects/site/melee-boxart.png';
import melee_menu from '@/assets/projects/site/melee-menu.png';

export default function Site() {

    return (
        <ProjectLayout name="Site" year="2025">
            <div className="flex flex-col justify-center text-left m-12 space-y-8">
                <img src={logo} alt="site-logo" className="w-36 self-center" />
                <p>Thanks for being here.</p>
                <p>I started building this in late 2025 as a way to showcase my experience and replace my old portfolio site that was in need of an update.</p>
                <p>The design language of this site is partly inspired by Super Smash Bros. Melee, released for the Nintendo GameCube in 2001:</p>
                <div className="flex flex-row h-72 justify-around mx-12">
                    <img src={melee_boxart} alt="site-logo" />
                    <img src={melee_menu} alt="site-logo" />
                </div>
                <p>I opted out of just hostng the site on a "hands-off" platform like Vercel or Netlify because I wanted to have full control over the deployment process.</p>
                <p>This site is hosted on an <b>Ubuntu VPS</b>, complete with:
                    <ul className="list-disc pl-4 ml-4 mt-2">
                        <li>Unattended updates</li>
                        <li>HTTP to HTTPS redirection</li>
                        <li>Automatic TLS certificate issuance and renewal</li>
                        <li>SSH hardening</li>
                        <li>Firewall rules</li>
                        <li>Deployment through GitHub Actions</li>
                    </ul>
                </p>
                <p>On the application site, this site is built with <b>Laravel (PHP)</b>, <b>React (TypeScript)</b>, and <b>Tailwind CSS</b>.</p>
                <p>
                    On the server side, I use <b>Traefik</b> as a reverse proxy to handle the HTTP to HTTPS redirection and issuing TLS certificates via ACME.
                    I am using <b>NGINX</b> as the webserver to serve the application itself.
                </p>
                <a
                    href="https://github.com/ricardocolom64/AliensTookMyFriend" target="_blank" rel="noopener noreferrer"
                    className="underline">
                    Source available here.
                </a>
            </div>
        </ProjectLayout>
    );
}
