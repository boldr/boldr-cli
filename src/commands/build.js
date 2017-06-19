import appRoot from 'boldr-utils/lib/node/appRoot';
import logger from 'boldr-utils/lib/logger';
import Engine from 'boldr-engine/lib/Engine';

function task(args, options) {
  const cwd = appRoot.get();
  const engine = new Engine(cwd);
  engine.build().then(
    () => {
      logger.end('Build finished successfully.');
      process.exit(0);
    },
    err => {
      logger.error('Build task failed...');
      logger.error(err);
      process.exit(1);
    },
  );
}

function register(program) {
  program.command('build', 'Compile the browser and server bundles for production.').action(task);
}

export default { register };
