import path from 'path';
import fs from 'fs-extra';
import appRoot from 'boldr-utils/lib/node/appRoot';
import logger from 'boldr-utils/lib/logger';
import Engine from 'boldr-engine/lib/Engine';

const cwd = appRoot.get();
const cacheDir = path.join(cwd, 'node_modules', '.boldr_cache');

function cleanBoldr(config) {
  fs.removeSync(cacheDir);
  fs.removeSync(config.bundle.client.bundleDir);
  fs.removeSync(config.bundle.server.bundleDir);
}

function cleanInput(directory) {
  fs.removeSync(`${cwd}/${directory}`);
}

function task(args, options) {
  logger.task('Cleaning up');
  const engine = new Engine(cwd);
  const config = engine.getConfiguration();
  cleanBoldr(config);

  const { directory } = options;
  if (directory) {
    cleanInput(directory);
  }
  logger.end('Removed cache, built client files, and compiled server.');
}

function register(program) {
  program
    .command('clean', 'Remove files or directories.')
    .help('By default, cache, assets dir and the compiled server are removed.')
    .option(
      '-d, --directory [dir]',
      'Path from current working directory to the directory or file to remove.',
    )
    .action(task);
}

export default { register };
