#!/usr/bin/env node

import program from 'caporal';
import updateNotifier from 'update-notifier';
import Engine from 'boldr-engine/lib/Engine';
import pkg from '../package.json';
import init from './commands/init';
import build from './commands/build';
import clean from './commands/clean';
import dev from './commands/dev';
// import component from './commands/component';

program.STRING = value => (typeof value === 'string' ? value : null);

updateNotifier({ pkg }).notify();

program.version(pkg.version).description('A command line scaffolding tool and helper for Boldr.');

build.register(program);
clean.register(program);
dev.register(program);
init.register(program);
// component.register(program);

program.parse(process.argv);
