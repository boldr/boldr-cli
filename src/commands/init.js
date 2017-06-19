/* @flow */
/* eslint-disable max-lines, max-statements, camelcase */

import path from 'path';
import fs from 'fs-extra';
import downloadGitRepo from 'download-git-repo';
import execa from 'execa';
import logger from 'boldr-utils/lib/logger';
import appRoot from 'boldr-utils/lib/node/appRoot';
import cliPkgJson from '../../package.json';
import { getPkg } from '../util/pkg';

function npmInstall(projectDir: string) {
  logger.task('Installing');
  logger.info(projectDir);
  return getPkg(projectDir).then(() => {
    execa('yarn', ['install'], { cwd: projectDir });
  });
}

function task(args, options) {
  const dirName = args.dir;
  const projectDir = path.join(process.cwd(), dirName);
  downloadGitRepo('strues/boldr', projectDir, err => {
    if (err) {
      return logger.error(err);
    }
    npmInstall(projectDir);
  });
}

function register(program) {
  program
    .command('init', 'initialize a new Boldr project.')
    .argument('<dir>', 'Directory name')
    .action(task);
}

export default { register };
