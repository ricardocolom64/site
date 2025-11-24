<?php

namespace Deployer;

require 'recipe/common.php';

set('keep_releases', 5);

host('prod')
    ->setHostname(getenv('SERVER_HOST'))
    ->setRemoteUser(getenv('SERVER_USER'))
    ->setPort(22)
    ->setDeployPath('/var/www/vhosts/site');

set('shared_files', ['.env']);
set('shared_dirs', ['storage', 'database']);
set('keep_releases', 5);

task('deploy:build', function () {
    runLocally('rm -rf build');
    runLocally('mkdir build');

    runLocally('composer install --no-dev --optimize-autoloader');
    runLocally('npm ci');
    runLocally('npm run build');

    runLocally('cp -R app bootstrap config database public vendor resources routes storage artisan build/');
});

// Overwriting deploy:update_code task from recipe/common since https://github.com/deployphp/deployer/pull/4017 has not been released yet
task('deploy:update_code', function () {
    upload('build/', '{{release_path}}');
});

desc('Prepares a new release');
task('deploy:prepare', [
    'deploy:info',
    'deploy:setup',
    'deploy:lock',
    'deploy:release',
    'deploy:build',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
]);

desc('Publishes the release');
task('deploy:publish', [
    'deploy:symlink',
    'deploy:unlock',
    'deploy:cleanup',
    'deploy:success',
]);

task('deploy', [
    'deploy:prepare',
    'deploy:publish',
]);

after('deploy:failed', 'deploy:unlock');
